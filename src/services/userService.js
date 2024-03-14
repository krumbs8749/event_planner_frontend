export const getUserProfile = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile", error);
      throw error;
    }
  };
  
  export const updateUserProfile = async (userId, profileData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, profileData);
      return response.data;
    } catch (error) {
      console.error("Error updating user profile", error);
      throw error;
    }
  };
  