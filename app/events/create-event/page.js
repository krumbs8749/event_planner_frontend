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
    totalCost: null,
    totalSeats: null,
    totalRegistration: null
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

          {/* Event Information Section */}
          <section className={`${styles.formSection} ${styles.eventInfo}`}>
            <h2 className={styles.sectionTitle}>Event Information</h2>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Name"
              value={eventData.name}
              onChange={(e) => setEventData({...eventData, name: e.target.value})}
            />
            <textarea
              className={styles.formTextArea}
              placeholder="Description"
              value={eventData.description}
              onChange={(e) => setEventData({...eventData, description: e.target.value})}
            />
            <input
              className={styles.formInput}
              type="text"
              placeholder="Location"
              value={eventData.location}
              onChange={(e) => setEventData({...eventData, location: e.target.value})}
            />
            <input
              className={styles.formInputDateTime}
              type="datetime-local"
              placeholder="DateTime"
              value={eventData.dateTime}
              onChange={(e) => setEventData({...eventData, dateTime: e.target.value})}
            />
          </section>

          {/* Owner Information Section */}
          <section className={`${styles.formSection} ${styles.owner}`}>
            <h2 className={styles.sectionTitle}>Owner Information</h2>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Owner Name"
              value={eventData.owner.name}
              onChange={handleOwnerChange}
            />
            <input
              className={styles.formInputEmail}
              type="email"
              placeholder="Owner Email"
              value={eventData.owner.email}
              onChange={handleOwnerChange}
            />
            <input
              className={styles.formInput}
              type="text"
              placeholder="Owner Phone Number"
              value={eventData.owner.phoneNumber}
              onChange={handleOwnerChange}
            />
          </section>

          {/* Event Details Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Event Details</h2>
            <input
              className={styles.formInputNumber}
              type="number"
              placeholder="Total Cost"
              value={eventData.totalCost}
              onChange={(e) => setEventData({...eventData, totalCost: e.target.value})}
            />
            <input
              className={styles.formInputNumber}
              type="number"
              placeholder="Total Seats"
              value={eventData.totalSeats}
              onChange={(e) => setEventData({...eventData, totalSeats: e.target.value})}
            />
          </section>

          <button className={styles.submitButton} type="submit">Create Event</button>
        </form>
      </div>
    </div>);
};

export default CreateEvent;
