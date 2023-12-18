import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './register.module.scss';
import { useContext, useEffect, useState } from 'react';
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
    lang: {
      registerTitle,
      namePlaceholder,
      emailPlaceholder,
      passwordPlaceholder,
      registerButtonText,
      googleButtonText,
      accountPositiveText,
      loginButtonText,
      accountSupportText,
    },
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
    <section className={`${styles.register} container d-flex flex-column mb-3`}>
      <h1 className="text-info text-center">{registerTitle}</h1>
      <div className="row row-cols-auto justify-content-center">
        <input
          className="col mx-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={namePlaceholder}
        />
        <input
          className="col mx-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
        />
        <input
          className="col mx-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={passwordPlaceholder}
        />
        <button className="col mx-1 btn btn-success" onClick={handleSignUp}>
          {registerButtonText}
        </button>
      </div>
      <button
        className="p-2 mt-3 mx-auto btn btn-info"
        onClick={signInWithGoogle}
      >
        {googleButtonText}
      </button>
      <p className="text-center mt-2">
        {accountPositiveText} <Link to="/login">{loginButtonText}</Link>
        {` ${accountSupportText}`}
      </p>
    </section>
  );
};

export default Register;
