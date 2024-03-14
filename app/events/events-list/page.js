'use client'
import { useEffect, useState } from 'react';
import { getEvents } from '../../../src/services/eventService';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await getEvents();
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          // Add more details as needed
        </div>
      ))}
    </div>
  );
};

export default Events;
