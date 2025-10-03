import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
    address: "Address 13, 3443",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
    address: "Address 99, 3443222",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// executes on server (SSR) (before rendering the component) (runs on every request)
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// executes on the server (before rendering the component) (SSG):
export async function getStaticProps() {
  // fetch from API
  //const response = await fetch("/api/meetups");
  // this code is already on the server (back-end) so we don't need an additional fetch (http request)
  const client = MongoClient.connect(
    "mongodb+srv://vedran:Test123@cluster0.0wze4.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  (await client).close();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString(),
      })),
    }, // In the HomePage props
    revalidate: 1,
  };
}

export default HomePage;
