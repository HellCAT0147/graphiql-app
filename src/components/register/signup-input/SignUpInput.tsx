import React, { ReactNode } from 'react';

function SignUpInput({
  namePlaceholder,
  isSuccess,
  value,
  callback,
  errorBlock,
}: {
  namePlaceholder: string;
  isSuccess: boolean | undefined;
  value: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorBlock: ReactNode | null;
}): ReactNode {
  return (
    <div className={`form-group ${isSuccess !== false ? '' : 'has-danger'}`}>
      <input
        className={`col mx-1 form-control ${
          isSuccess !== false ? '' : 'is-invalid'
        }`}
        type="text"
        value={value}
        onChange={callback}
        placeholder={namePlaceholder}
      />
      {errorBlock}
    </div>
  );
}

export default SignUpInput;
