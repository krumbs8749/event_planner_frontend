"use client";

import { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import styles from './CreateEvent.module.scss';


const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '', 
    description: '', 
    location: '', 
    dateTime: '', 
    owner: { name: '', email: '', phoneNumber: '' },
    totalCost: 0,
    totalSeats: 0,
    totalRegistration: 0
  });

  const handleOwnerChange = (e) => {
    setEventData({...eventData, owner: { ...eventData.owner, [e.target.name]: e.target.value }});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdEvent = await createEvent(eventData);
      console.log("Event Created:", createdEvent);
      // Redirect or display success message
    } catch (error) {
      console.error("Failed to create event", error);
      // Display error message
    }
  };

  return (
    <div className={styles.createEventContainer}>
      <div className={styles.createEventFormContainer}>
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit} className={styles.createEventForm}>
          <input type="text" placeholder="Name" value={eventData.name} onChange={(e) => setEventData({...eventData, name: e.target.value})} />
          <textarea placeholder="Description" value={eventData.description} onChange={(e) => setEventData({...eventData, description: e.target.value})} />
          <input type="text" placeholder="Location" value={eventData.location} onChange={(e) => setEventData({...eventData, location: e.target.value})} />
          <input type="datetime-local" placeholder="DateTime" value={eventData.dateTime} onChange={(e) => setEventData({...eventData, dateTime: e.target.value})} />
          {/* Owner details */}
          <input type="text" placeholder="Owner Name" value={eventData.owner.name} name="name" onChange={handleOwnerChange} />
          <input type="email" placeholder="Owner Email" value={eventData.owner.email} name="email" onChange={handleOwnerChange} />
          <input type="text" placeholder="Owner Phone Number" value={eventData.owner.phoneNumber} name="phoneNumber" onChange={handleOwnerChange} />
          {/* Additional Event details */}
          <input type="number" placeholder="Total Cost" value={eventData.totalCost} onChange={(e) => setEventData({...eventData, totalCost: e.target.value})} />
          <input type="number" placeholder="Total Seats" value={eventData.totalSeats} onChange={(e) => setEventData({...eventData, totalSeats: e.target.value})} />
          <input type="number" placeholder="Total Registration" value={eventData.totalRegistration} onChange={(e) => setEventData({...eventData, totalRegistration: e.target.value})} />
          <button className={styles.submitButton} type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
