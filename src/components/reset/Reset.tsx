import { FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { sendPasswordReset } from '../../firebase/firebase';
import { ResetResponse } from '../../firebase/types';
import { isError } from '../../utils/typeguards';
import Loader from '../viewers/docs-viewer/loader';

const Reset: React.FC = (): ReactNode => {
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

  const handleReset = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSending(true);
    const response: Error | ResetResponse = await sendPasswordReset(email);
    if (isError(response)) toast.error(response.message);
    else toast.success(resetSent);
    setIsSending(false);
  };

  return loading || user ? (
    <Loader />
  ) : (
    <section className="container d-flex flex-column my-3">
      <h1 className="text-info text-center">{resetTitle}</h1>
      <form
        className="row row-cols-auto justify-content-center gap-3"
        onSubmit={handleReset}
      >
        <div className="form-group">
          <input
            className="col mx-1 form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
          />
        </div>
        <button
          className="col ms-2 btn btn-success"
          type="submit"
          disabled={isSending}
        >
          {resetButtonText}
        </button>
      </form>
      <p className="text-center mt-2">
        {accountNegativeText} <Link to="/register">{registerLink}</Link>
        {` ${accountSupportText}`}
      </p>
    </section>
  );
};

export default Reset;
