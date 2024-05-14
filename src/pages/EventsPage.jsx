// This page shows all the events (possibly by using an event card just like in the recipe exercise) (name, description, start and endtime), a searchbar,
// a category filter and a way to add a new event.
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events/");
  // console.log("events:",events)
  const categories = await fetch("http://localhost:3000/categories/");
  const users = await fetch("http://localhost:3000/users/");
  return {
    events: await events.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventsPage = () => {
  // const { events, categories, users } = useLoaderData();
  const events = useLoaderData();
  console.log("events:", events);
  // const { events } = useLoaderData();
  return (
    <>
      <h1>Events</h1>
      <ul>
        {/* {events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))} */}
      </ul>
    </>
  );
};

// export const EventsPage = () => {
//   const [eventsList, setEventsList] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:3000/events");
//       const events = await response.json();
//       setEventsList(events);
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Events</h1>
//       <ul>
//         {eventsList.map((event) => (
//           <li key={event.id}>{event.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
