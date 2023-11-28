import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEventRSVPs } from '../../../services/rsvpService';

const EventRSVPs = () => {
  const router = useRouter();
  const { id } = router.query;
  const [rsvps, setRSVPs] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchRSVPs = async () => {
        const fetchedRSVPs = await getEventRSVPs(id);
        setRSVPs(fetchedRSVPs);
      };

      fetchRSVPs();
    }
  }, [id]);

  return (
    <div>
      <h1>RSVPs for Event</h1>
      {/* Display RSVP details */}
    </div>
  );
};

export default EventRSVPs;
