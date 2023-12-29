import { ReactNode } from 'react';
import { SafeParseError } from 'zod';

function ZodError({
  prefix,
  safeParseError,
}: {
  prefix: string;
  safeParseError: SafeParseError<string>;
}): ReactNode {
  return (
    <div className="text-danger fs-3">
      {prefix}
      {safeParseError.error.formErrors.formErrors.map((error) => (
        <div key={error} className="fs-6">
          <label>{error}</label>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default ZodError;
