import { ReactNode, useContext } from 'react';
import { SafeParseError } from 'zod';
import { LangContext } from '../../contexts/types';
import { Context } from '../../contexts';

function ZodError({
  safeParseError,
}: {
  safeParseError: SafeParseError<string>;
}): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const { lang } = context;

  return (
    <div className="text-danger fs-3">
      <div className="d-flex justify-content-evenly"></div>
      {safeParseError.error.formErrors.formErrors.map((error) => (
        <div key={error} className="fs-6">
          <label>{lang[error]}</label>
        </div>
      ))}
    </div>
  );
}

export default ZodError;
