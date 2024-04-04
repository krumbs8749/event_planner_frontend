"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './event-board.module.scss';
import { mockEvents } from '../../../src/dataSources/data';

const EventBoard = () => {
    const searchParams = useSearchParams()
    const eventID = searchParams.get('eventID')
    const [event, setEvent] = useState(null);
  
    useEffect(() => {
      // Fetch your event data here using `eventId`
      // This example assumes you have a way to retrieve the event details by ID
      const fetchEvent = async () => {
        //const response = await fetch(`/api/events/${eventId}`);
        const data = mockEvents[eventID];
        setEvent(data);
      };
  
      if (eventID) {
        fetchEvent();
      }
    }, [eventID]);
  
    if (!event) {
      return <p>Loading...</p>;
    }
  return (
    <div className={styles.eventBoard}>
      <div className={styles.header}>
        <h1 className={styles.title}>{event.name}</h1>
        <p className={styles.dateTime}>{new Date(event.dateTime).toLocaleString()}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{event.description}</p>
        <div className={styles.info}>
          <p>Location: {event.location}</p>
          <p>Owner: {event.owner.name}</p>
          <p>Total Cost: ${event.totalCost.toFixed(2)}</p>
          <p>Seats Available: {event.totalSeats - event.totalRegistration}</p>
        </div>
      </div>
    </div>
  );
}

export default EventBoard;
