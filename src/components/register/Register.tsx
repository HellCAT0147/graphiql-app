import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import React, {
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { toast } from 'react-toastify';
import passwordSchema from '../../utils/passwordChecker.ts';
import { SafeParseReturnType } from 'zod';
import emailSchema from '../../utils/emailChecker.ts';
import ZodError from '../zod-error';
import SignUpInput from './signup-input';
import Loader from '../viewers/docs-viewer/loader/Loader.tsx';
import Strength from './strength';
import { handleSignInWithGoogle } from '../../utils/handlers.ts';

const Register: React.FC = (): ReactNode => {
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
  const [isSending, setIsSending] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState<
    SafeParseReturnType<string, string> | undefined
  >(undefined);
  const [emailCheck, setEmailCheck] = useState<
    SafeParseReturnType<string, string> | undefined
  >(undefined);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignUp = (e: FormEvent): void => {
    e.preventDefault();

    setIsSending(true);

    const passwordValid = validatePassword(password);
    const emailValid = validateEmail(email);
    if (!passwordValid || !emailValid) {
      setIsSending(false);
      return;
    }

    registerWithEmailAndPassword(name, email, password).catch((error) => {
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

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const validatePassword = (password: string): boolean => {
    const validationStatus = passwordSchema.safeParse(password);
    setPasswordCheck(validationStatus);
    return validationStatus.success;
  };

  const validateEmail = (email: string): boolean => {
    const validationStatus = emailSchema.safeParse(email);
    setEmailCheck(validationStatus);
    return validationStatus.success;
  };

  const passwordErrorsElement =
    passwordCheck?.success === false ? (
      <ZodError safeParseError={passwordCheck} />
    ) : null;

  const emailErrorsElement =
    emailCheck?.success === false ? (
      <ZodError safeParseError={emailCheck} />
    ) : null;

  return loading || user ? (
    <Loader />
  ) : (
    <section className="container d-flex flex-column my-3">
      <h1 className="text-info text-center">{registerTitle}</h1>
      <form
        className="row row-cols-auto justify-content-center"
        onSubmit={handleSignUp}
      >
        <SignUpInput
          namePlaceholder={namePlaceholder}
          isSuccess={true}
          value={name}
          callback={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          errorBlock={null}
        ></SignUpInput>
        <SignUpInput
          namePlaceholder={emailPlaceholder}
          isSuccess={emailCheck?.success}
          value={email}
          callback={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          errorBlock={emailErrorsElement}
        ></SignUpInput>
        <SignUpInput
          namePlaceholder={passwordPlaceholder}
          isSuccess={passwordCheck?.success}
          value={password}
          callback={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          errorBlock={passwordErrorsElement}
          strength={<Strength checkField={passwordCheck} />}
        ></SignUpInput>
        <button
          disabled={isSending}
          className="col mx-1 btn btn-success"
          type="submit"
          style={{ height: 'fit-content' }}
        >
          {registerButtonText}
        </button>
      </form>
      <button
        className="p-2 mt-3 mx-auto btn btn-info"
        onClick={handleSignInWithGoogle}
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
