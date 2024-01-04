import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  loginWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import { toast } from 'react-toastify';

const Login: React.FC = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      loginTitle,
      emailPlaceholder,
      passwordPlaceholder,
      loginButtonText,
      googleButtonText,
      resetPasswordText,
      accountNegativeText,
      registerLink,
      accountSupportText,
    },
  } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleSignIn = (e: FormEvent): void => {
    // TODO: show loading indicator
    e.preventDefault();
    loginWithEmailAndPassword(email, password).catch((error) => {
      toast.error(error.message);
    });
  };

  useEffect(() => {
    if (loading) {
      // TODO: show loading indicator
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);

  return loading || user ? (
    <h1>Loading...</h1> // TODO: add appropriate loader
  ) : (
    <section className="container d-flex flex-column my-3">
      <h1 className="text-info text-center">{loginTitle}</h1>
      <form
        className="row row-cols-auto justify-content-center"
        onSubmit={handleSignIn}
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
        <div className="form-group">
          <input
            className="col mx-1 form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={passwordPlaceholder}
          />
        </div>
        <button className="col mx-1 btn btn-success" type="submit">
          {loginButtonText}
        </button>
      </form>
      <button
        className="p-2 mt-3 mx-auto btn btn-info"
        onClick={signInWithGoogle}
      >
        {googleButtonText}
      </button>
      <Link className="text-center mt-2" to="/reset">
        {resetPasswordText}
      </Link>
      <p className="text-center">
        {accountNegativeText} <Link to="/register">{registerLink}</Link>
        {` ${accountSupportText}`}
      </p>
    </section>
  );
};

export default Login;
