import { ReactNode, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './Reset.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { sendPasswordReset } from '../../firebase/firebase';
import { ResetResponse } from '../../firebase/types';
import { isError } from '../../utils/typeguards';
import Loader from '../viewers/docs-viewer/loader';

const Reset: React.FC<EmptyProps> = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      resetTitle,
      emailPlaceholder,
      resetButtonText,
      accountNegativeText,
      registerLink,
      accountSupportText,
      resetSent,
    },
  } = context;

  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleReset = async (): Promise<void> => {
    setIsSending(true);
    const response: Error | ResetResponse = await sendPasswordReset(email);
    if (isError(response)) toast.error(response.message);
    else toast.success(resetSent);
    setIsSending(false);
  };

  return loading || user ? (
    <Loader />
  ) : (
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
          disabled={isSending}
          className="col mx-1 btn btn-success"
          onClick={handleReset}
        >
          {resetButtonText}
        </button>
      </div>
      <p className="text-center mt-2">
        {accountNegativeText} <Link to="/register">{registerLink}</Link>
        {` ${accountSupportText}`}
      </p>
    </section>
  );
};

export default Reset;
