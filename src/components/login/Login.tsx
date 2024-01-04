import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, loginWithEmailAndPassword } from '../../firebase';
import { toast } from 'react-toastify';
import Loader from '../viewers/docs-viewer/loader';
import { handleSignInWithGoogle } from '../../utils/handlers';

const Login: React.FC<EmptyProps> = (): ReactNode => {
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
  const [isSending, setIsSending] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleSignIn = (): void => {
    setIsSending(true);
    loginWithEmailAndPassword(email, password).catch((error) => {
      toast.error(error.message);
      setIsSending(false);
    });
  };

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
      setIsSending(false);
    }
  }, [user, navigate]);

  return loading || user ? (
    <Loader />
  ) : (
    <section className="center-fixed container d-flex flex-column mb-3">
      <h1 className="text-info text-center">{loginTitle}</h1>
      <div className="row row-cols-auto justify-content-center">
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
        <button
          disabled={isSending}
          onClick={handleSignIn}
          className="col mx-1 btn btn-success"
        >
          {loginButtonText}
        </button>
      </div>
      <button
        className="p-2 mt-3 mx-auto btn btn-info"
        onClick={handleSignInWithGoogle}
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
