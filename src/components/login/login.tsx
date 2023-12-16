import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './login.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  loginWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';

const Login: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { loginTitle },
  } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  const handleSignIn = (): void => {
    // TODO: show loading indicator
    loginWithEmailAndPassword(email, password);
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
    <section className={`${styles.login} container d-flex flex-column mb-3`}>
      <h1 className="text-info text-center">{loginTitle}</h1>
      <div className="row row-cols-auto justify-content-center">
        <input
          className="col mx-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          className="col mx-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSignIn} className="col mx-1 btn btn-success">
          Login
        </button>
      </div>
      <button
        className="p-2 mt-3 mx-auto btn btn-info"
        onClick={signInWithGoogle}
      >
        Login with Google
      </button>
      <Link className="text-center mt-2" to="/reset">
        Forgot Password
      </Link>
      <p className="text-center">
        Don&apos;t have an account? <Link to="/register">Register</Link> now.
      </p>
    </section>
  );
};

export default Login;
