import { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './reset.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const Reset: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      resetTitle,
      emailPlaceholder,
      resetButtonText,
      accountNegativeText,
      registerLink,
      accountSupportText,
    },
  } = context;

  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    // TODO: add loading
    if (user) navigate('/');
  }, [user, loading, navigate]);

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  return (
    <section className={`${styles.reset} container d-flex flex-column mb-3`}>
      <h1 className="text-info text-center">{resetTitle}</h1>
      <div className="row row-cols-auto justify-content-center">
        <input
          className="col mx-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
        />
        <button
          className="col mx-1 btn btn-success"
          onClick={() => sendPasswordResetEmail(auth, email)}
        >
          {resetButtonText}
        </button>
      </div>
      <p className="text-center mt-2">
        {accountNegativeText} <Link to="/register">{registerLink}</Link>
        {` ${accountSupportText}`}.
      </p>
    </section>
  );
};

export default Reset;
