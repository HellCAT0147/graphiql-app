import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import { toast } from 'react-toastify';
import passwordSchema from '../../utils/passwordChecker.ts';
import { SafeParseReturnType } from 'zod';
import emailSchema from '../../utils/emailChecker.ts';
import ZodError from '../zod-error';
import SignUpInput from './signup-input';

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
    const passwordValid = validatePassword(password);
    const emailValid = validateEmail(email);
    if (!passwordValid || !emailValid) {
      return;
    }
    // TODO: loading
    registerWithEmailAndPassword(name, email, password).catch((error) => {
      toast.error(error.message);
    });
  };

  useEffect(() => {
    // TODO: add loading
    if (loading) return;
    if (user) navigate('/', { replace: true });
  }, [user, loading, navigate]);

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
      <ZodError checkName="password" safeParseError={passwordCheck} />
    ) : null;

  const emailErrorsElement =
    emailCheck?.success === false ? (
      <ZodError checkName="email" safeParseError={emailCheck} />
    ) : null;

  return (
    <section className="container d-flex flex-column my-3">
      <h1 className="text-info text-center">{registerTitle}</h1>
      <form
        className="row row-cols-auto justify-content-center"
        onSubmit={handleSignUp}
      >
        <SignUpInput
          namePlaceholder={namePlaceholder}
          isSuccess={undefined}
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
        ></SignUpInput>
        <button
          className="col mx-1 btn btn-success"
          type="submit"
          style={{ height: 'fit-content' }}
        >
          {registerButtonText}
        </button>
      </form>
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
