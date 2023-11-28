import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEventById, sendRSVP } from '../services/eventService';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        const fetchedEvent = await getEventById(id);
        setEvent(fetchedEvent);
      };

      fetchEvent();
    }
  }, [id]);

  const handleRSVP = async (response) => {
    // Assuming userId is obtained from user context or authentication token
    await sendRSVP(event.id, userId, response);
    // Update UI based on response
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <button onClick={() => handleRSVP('accept')}>Accept</button>
      <button onClick={() => handleRSVP('decline')}>Decline</button>
    </div>
  );
};

export default EventDetails;
