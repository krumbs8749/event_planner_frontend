'use client'

import { useState } from 'react';
import { createEvent } from '../../services/eventService';
import styles from './CreateEvent.module.scss'
const CreateEvent = () => {
  const [eventData, setEventData] = useState({ title: '', description: '', date: '', location: '' });

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
            <input 
              type="text" 
              placeholder="Title" 
              value={eventData.title}
              onChange={(e) => setEventData({...eventData, title: e.target.value})}
            />
            <textarea 
              placeholder="Description" 
              value={eventData.description}
              onChange={(e) => setEventData({...eventData, description: e.target.value})}
            />
            <input 
              className={styles.formInput}
              type="date" 
              placeholder="Date" 
              value={eventData.date}
              onChange={(e) => setEventData({...eventData, date: e.target.value})}
            />
            <input 
              className={styles.formInput}
              type="text" 
              placeholder="Location" 
              value={eventData.location}
              onChange={(e) => setEventData({...eventData, location: e.target.value})}
            />
            {/* Submit Button */}
            <button className={styles.submitButton} type="submit">Create Event</button>
          </form>
      </div>
     
    </div>
  );
};


export default CreateEvent;
