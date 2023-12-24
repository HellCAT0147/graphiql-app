import { useEffect } from 'react';
import { EmptyProps } from '../types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import GraphiQl from '../graphiql';
import { DocsViewer } from '../viewers';
import { toast } from 'react-toastify';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    toast.error(error.message);
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
  }, [user, loading, navigate]);

  return user ? (
    <main className="main container-fluid d-flex py-3">
      <DocsViewer />
      <GraphiQl />
    </main>
  ) : (
    <></>
  );
};

export default Main;
