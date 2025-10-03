import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // does not return a promise, its smart !
  const data = useLoaderData();
  const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "Could not fetch events." };
    //throw { message: "Could not fetch events" }; // goes to the nearest errorElement in router
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500,
    });
    //return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
