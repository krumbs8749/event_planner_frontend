export const getEventRSVPs = async (eventId) => {
    try {
      const response = await axios.get(`${BASE_URL}/events/${eventId}/rsvps`);
      return response.data;
    } catch (error) {
      console.error("Error fetching RSVPs", error);
      throw error;
    }
  };
  