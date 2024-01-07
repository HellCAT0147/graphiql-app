import { ReactNode, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import GraphiQl from '../graphiql';
import { DocsViewer } from '../viewers';
import { toast } from 'react-toastify';
import Loader from '../viewers/docs-viewer/loader';

const Main: React.FC = (): ReactNode => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) toast.error(error.message);
    if (!user) return navigate('/login');
  }, [user, navigate, error]);

  return loading || !user ? (
    <Loader />
  ) : (
    <main className="main container-fluid-lg d-flex flex-column flex-lg-row py-3 flex-grow-1">
      <DocsViewer />
      <GraphiQl />
    </main>
  );
};

export default Main;
