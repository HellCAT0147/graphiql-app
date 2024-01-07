import { ReactNode, useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import Button from '../button';
import { toast } from 'react-toastify';

const WelcomeNav: React.FC<EmptyProps> = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeMain, welcomeSignIn, welcomeSignUp },
  } = context;

  const [user, , error] = useAuthState(auth);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  return (
    <nav className="container-fluid my-3 d-flex gap-3 justify-content-end">
      {!user ? (
        <>
          <Button text={welcomeSignIn} link={'/login'} />
          <Button text={welcomeSignUp} link={'/register'} />
        </>
      ) : (
        <Button text={welcomeMain} link={'/'} />
      )}
    </nav>
  );
};

export default WelcomeNav;
