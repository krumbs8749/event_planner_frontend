import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/events'; // Your Spring backend URL

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, eventData);
        return response.data;
    } catch (error) {
        console.error("Error creating event", error);
        throw error;
    }
};

export const getEvents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/events/getAll`);
      return response.data;
    } catch (error) {
      console.error("Error fetching events", error);
      throw error;
    }
};
  
export const sendRSVP = async (eventId, userId, response) => {
    try {
      const res = await axios.post(`${BASE_URL}/events/${eventId}/rsvp`, { userId, response });
      return res.data;
    } catch (error) {
      console.error("Error sending RSVP", error);
      throw error;
    }
};
  
export const updateEvent = async (eventId, eventData) => {
    try {
      const response = await axios.put(`${BASE_URL}/events/${eventId}`, eventData);
      return response.data;
    } catch (error) {
      console.error("Error updating event", error);
      throw error;
    }
};
  