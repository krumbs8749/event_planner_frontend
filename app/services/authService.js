export const checkUserRole = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}/role`);
      return response.data.role; // Assume it returns 'organizer' or 'attendee'
    } catch (error) {
      console.error("Error checking user role", error);
      throw error;
    }
  };
  