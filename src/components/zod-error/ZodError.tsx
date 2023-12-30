import { ReactNode, useContext } from 'react';
import { SafeParseError } from 'zod';
import { LangContext } from '../../contexts/types';
import { Context } from '../../contexts';

function ZodError({
  checkName,
  safeParseError,
}: {
  checkName: string;
  safeParseError: SafeParseError<string>;
}): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { emailErrorTitle, passwordErrorTitle },
  } = context;
  const { lang } = context;
  const strength = 6 - safeParseError.error.formErrors.formErrors.length;

  return (
    <div className="text-danger fs-3">
      <div className="d-flex justify-content-evenly">
        <div>
          {checkName === 'email' ? emailErrorTitle : passwordErrorTitle}
        </div>
        <div>
          {checkName === 'password' ? '·'.repeat(strength) + '/······' : ''}
        </div>
      </div>
      {safeParseError.error.formErrors.formErrors.map((error) => (
        <div key={error} className="fs-6">
          <label>{lang[error]}</label>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default ZodError;
