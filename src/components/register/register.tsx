import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './register.module.scss';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';

const Register: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { registerTitle },
  } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignUp = (): void => {
    // TODO: loading & validation
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    // TODO: add loading
    if (loading) return;
    if (user) navigate('/', { replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <h1 className="text-info">{registerTitle}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <button className="register__btn" onClick={handleSignUp}>
          Register
        </button>
        <button onClick={signInWithGoogle}>Register with Google</button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </section>
  );
};

export default Register;
