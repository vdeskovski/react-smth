import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const MeetupDetails = (props) => {
  //console.log(props.meetupData);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={`Details for ${props.meetupData.title}`}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

// need getStaticPaths for dynamic pages and getStaticProps
export async function getStaticPaths() {
  const client = MongoClient.connect(
    "mongodb+srv://vedran:Test123@cluster0.0wze4.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db();
  const meetupsCollection = db.collection("meetups");
  const meetupIds = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray(); // only id
  // const meetupIds = await meetupsCollection.find().toArray();
  // console.log(meetupIds);
  (await client).close();
  return {
    fallback: false,
    paths: meetupIds.map((m) => ({
      params: { meetupId: m._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = MongoClient.connect(
    "mongodb+srv://vedran:Test123@cluster0.0wze4.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId.createFromHexString(meetupId),
  });
  (await client).close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
