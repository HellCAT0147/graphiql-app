import { ReactNode, useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';

import { EmptyProps } from '../../types';
import Button from '../button';

const WelcomeNav: React.FC<EmptyProps> = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeMain, welcomeSignIn, welcomeSignUp },
  } = context;

  const tokenMissing = true;
  //TODO:: change 'tokenMissing' to let or to context or state

  return (
    <div className="d-flex flex-row justify-content-end my-3 mx-3">
      {tokenMissing ? (
        <>
          <Button text={welcomeSignIn} link={'/login'} />
          <Button text={welcomeSignUp} link={'/registration'} />
        </>
      ) : (
        <Button text={welcomeMain} link={'/'} />
      )}
    </div>
  );
};

export default WelcomeNav;
