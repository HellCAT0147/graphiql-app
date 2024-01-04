import { FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

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
    if (error) toast.error(error.message);
  }, [error]);

  const handleReset = (e: FormEvent): void => {
    // TODO: loading & validation
    e.preventDefault();
    sendPasswordResetEmail(auth, email).catch((error) => {
      toast.error(error.message);
    });
  };

  return (
    <section className="container d-flex flex-column my-3">
      <h1 className="text-info text-center">{resetTitle}</h1>
      <form
        className="row row-cols-auto justify-content-center"
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
        <button className="col mx-1 btn btn-success" type="submit">
          {resetButtonText}
        </button>
      </form>
      <p className="text-center mt-2">
        {accountNegativeText} <Link to="/register">{registerLink}</Link>
        {` ${accountSupportText}`}.
      </p>
    </section>
  );
};

export default Reset;
