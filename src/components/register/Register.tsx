import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import styles from './Register.module.scss';
import React, { useContext, useEffect, useState } from 'react';
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
import SignUpInput from './signUpInput';

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

  const handleSignUp = (): void => {
    const passwordValid = validatePassword();
    const emailValid = validateEmail();
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

  const validatePassword: () => boolean = () => {
    const validationStatus = passwordSchema.safeParse(password);
    setPasswordCheck(validationStatus);
    return validationStatus.success;
  };
  const validateEmail: () => boolean = () => {
    const validationStatus = emailSchema.safeParse(email);
    setEmailCheck(validationStatus);
    return validationStatus.success;
  };

  let passwordErrorsElement = <></>;
  if (passwordCheck != undefined && !passwordCheck.success) {
    passwordErrorsElement = (
      <ZodError checkName="password" safeParseError={passwordCheck} />
    );
  }

  let emailErrorsElement = <></>;
  if (emailCheck != undefined && !emailCheck.success) {
    emailErrorsElement = (
      <ZodError checkName="email" safeParseError={emailCheck} />
    );
  }

  return (
    <section className={`${styles.register} container d-flex flex-column mb-3`}>
      <h1 className="text-info text-center">{registerTitle}</h1>
      <div className="row row-cols-auto justify-content-center">
        <SignUpInput
          namePlaceholder={namePlaceholder}
          checkResult={undefined}
          value={name}
          callback={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          errorBlock={null}
        ></SignUpInput>
        <SignUpInput
          namePlaceholder={emailPlaceholder}
          checkResult={emailCheck?.success}
          value={email}
          callback={(e) => {
            setEmailCheck(undefined);
            setEmail(e.target.value);
          }}
          errorBlock={emailErrorsElement}
        ></SignUpInput>
        <SignUpInput
          namePlaceholder={passwordPlaceholder}
          checkResult={passwordCheck?.success}
          value={password}
          callback={(e) => {
            setPasswordCheck(undefined);
            setPassword(e.target.value);
          }}
          errorBlock={passwordErrorsElement}
        ></SignUpInput>
        <div>
          <button className="col mx-1 btn btn-success" onClick={handleSignUp}>
            {registerButtonText}
          </button>
        </div>
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
