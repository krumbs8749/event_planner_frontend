import apiClient from './apiClient';

// Fetch all events
export const fetchEvents = async () => {
  const { data } = await apiClient.get('/events/getAll');
  return data;
};

// Fetch a single event
export const fetchEventById = async (id) => {
  const { data } = await apiClient.get(`/events/get/${id}`);
  return data;
};

// Fetch attendees for an event
export const fetchAttendees = async (eventId) => {
  const { data } = await apiClient.get(`/events/${eventId}/attendees`);
  return data;
};

// Create a new event
export const createEvent = async (event) => {
  const { data } = await apiClient.post('/events/create', event);
  return data;
};

// Update an event
export const updateEvent = async (event) => {
  const { data } = await apiClient.put(`/events/update`, event);
  return data;
};

export const addOrUpdateCost = async (eventId, costSourceData) => {
    const response = await apiClient.put(`/events/update/costs/${eventId}`, costSourceData);
    return response.data;
  };
  
  export const addOrUpdateTask = async (eventId, taskData) => {
    const response = await apiClient.put(`/events/update/tasks/${eventId}`, taskData);
    return response.data;
  };
  
  export const addOrUpdateAttendee = async (eventId, attendeeData) => {
    const response = await apiClient.put(`/events/update/attendees/${eventId}`, attendeeData);
    return response.data;
  };

// Delete an event
export const deleteEvent = async (eventId) => {
  const { data } = await apiClient.delete(`/events/${eventId}`);
  return data;
};
