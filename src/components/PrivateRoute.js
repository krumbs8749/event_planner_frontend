import { useSession } from 'next-auth/client';
import { checkUserRole } from '../../src/services/authService';

const PrivateRoute = ({ children, role }) => {
  const [session, loading] = useSession();
  const userRole = session && checkUserRole(session.user.id);

  if (loading || !session || userRole !== role) {
    return <div>Loading or Unauthorized</div>;
  }

  return children;
};
