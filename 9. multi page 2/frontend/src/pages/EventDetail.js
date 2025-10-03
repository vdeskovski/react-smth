import React from "react";
import { redirect, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventsDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventsDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch details for event: " + id }),
      {
        status: 500,
      }
    );
  }
  return response;
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not delete event: " + eventId }),
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
