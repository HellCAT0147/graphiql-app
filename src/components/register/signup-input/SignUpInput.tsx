import React, { ReactNode } from 'react';

function SignUpInput({
  namePlaceholder,
  isSuccess,
  value,
  callback,
  errorBlock,
  strength,
}: {
  namePlaceholder: string;
  isSuccess: boolean | undefined;
  value: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorBlock: ReactNode | null;
  strength?: ReactNode;
}): ReactNode {
  return (
    <div className={`form-group ${isSuccess !== false ? '' : 'has-danger'}`}>
      <input
        className={`col form-control ${
          isSuccess !== false ? '' : 'is-invalid'
        }`}
        type="text"
        value={value}
        onChange={callback}
        placeholder={namePlaceholder}
      />
      {strength}
      {errorBlock}
    </div>
  );
}

export default SignUpInput;
