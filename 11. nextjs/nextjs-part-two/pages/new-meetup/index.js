import React from "react";
import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import { setConfig } from "next/config";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredData),
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>New meetup</title>
        <meta name="description" content="Create a meetup" />
      </Head>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
