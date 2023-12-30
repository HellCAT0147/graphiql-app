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
    lang: {
      emailErrorTitle,
      emailError,
      passwordErrorTitle,
      passwordErrorLetter,
      passwordErrorDigital,
      passwordErrorUppercase,
      passwordErrorLowercase,
      passwordErrorSpecial,
    },
  } = context;
  return (
    <div className="text-danger fs-3">
      {checkName === 'email' ? emailErrorTitle : passwordErrorTitle}
      {safeParseError.error.formErrors.formErrors.map((error) => (
        <div key={error} className="fs-6">
          <label>
            {checkName === 'email'
              ? emailError
              : error === 'digit'
                ? passwordErrorDigital
                : error === 'uppercase'
                  ? passwordErrorUppercase
                  : error === 'lowercase'
                    ? passwordErrorLowercase
                    : error === 'special'
                      ? passwordErrorSpecial
                      : passwordErrorLetter}
          </label>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default ZodError;
