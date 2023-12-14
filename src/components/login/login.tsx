import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './login.module.scss';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  logInWithEmailAndPassword,
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

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  const navigate = useNavigate();

  const handleSignIn = (): void => {
    // TODO: show loading indicator
    logInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) {
      // TODO: show loading indicator
      return;
    }
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <h1 className="text-info">{loginTitle}</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSignIn}>Login</button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don&apos;t have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </section>
  );
};

export default Login;
