import { ReactNode, useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import Button from '../button';

const WelcomeNav: React.FC<EmptyProps> = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeMain, welcomeSignIn, welcomeSignUp },
  } = context;

  const [user, , error] = useAuthState(auth);

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  return (
    <div className="d-flex flex-row justify-content-end my-3 mx-3">
      {!user ? (
        <>
          <Button text={welcomeSignIn} link={'/login'} />
          <Button text={welcomeSignUp} link={'/register'} />
        </>
      ) : (
        <Button text={welcomeMain} link={'/'} />
      )}
    </div>
  );
};

export default WelcomeNav;
