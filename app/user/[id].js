import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/userService';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserProfile = async () => {
        const fetchedUser = await getUserProfile(id);
        setUser(fetchedUser);
      };

      fetchUserProfile();
    }
  }, [id]);

  const handleProfileUpdate = async (updatedData) => {
    await updateUserProfile(user.id, updatedData);
    // Update UI or show success message
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      {/* Add form or UI elements to display and edit user profile */}
    </div>
  );
};

export default UserProfile;
