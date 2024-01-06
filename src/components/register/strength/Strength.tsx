import React, { ReactNode } from 'react';
import { SafeParseReturnType } from 'zod';

const Strength: React.FC<{
  checkField: SafeParseReturnType<string, string> | undefined;
}> = ({ checkField }): ReactNode => {
  const maxPasswordStrength = 6;
  let strength = 0;
  let progressStrength = 0;

  if (checkField !== undefined) {
    if (checkField.success) {
      progressStrength = 100;
    } else {
      const errorLength = checkField.error.formErrors.formErrors.length;
      strength = maxPasswordStrength - errorLength;
      progressStrength = (strength / maxPasswordStrength) * 100;
    }
  }

  return (
    <div className="progress my-2">
      <div
        className={`progress-bar bg-${
          progressStrength <= 35
            ? 'danger'
            : progressStrength <= 67
              ? 'warning'
              : 'success'
        }`}
        role="progressbar"
        style={{ width: `${progressStrength}%` }}
      ></div>
    </div>
  );
};

export default Strength;
