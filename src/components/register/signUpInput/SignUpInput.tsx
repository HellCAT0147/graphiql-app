import React, { ReactNode } from 'react';

function SignUpInput({
  namePlaceholder,
  checkResult,
  value,
  callback,
  errorBlock,
}: {
  namePlaceholder: string;
  checkResult: boolean | undefined;
  value: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorBlock: ReactNode | null;
}): ReactNode {
  return (
    <div
      className={checkResult !== false ? 'form-group' : 'form-group has-danger'}
    >
      <input
        className={
          checkResult !== false
            ? 'col mx-1 form-control'
            : 'col mx-1 bg-danger form-control is-invalid'
        }
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
