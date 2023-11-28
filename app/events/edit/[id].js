import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEventById, updateEvent } from '../../../services/eventService';

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [eventData, setEventData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        const event = await getEventById(id);
        setEventData({ title: event.title, description: event.description });
      };

      fetchEvent();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEvent(id, eventData);
    // Redirect or show success message
  };

  return (
    <div>
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for event editing */}
      </form>
    </div>
  );
};

export default EditEvent;
