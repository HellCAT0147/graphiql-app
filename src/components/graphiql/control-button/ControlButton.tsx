import { ReactNode } from 'react';
import { ButtonAttributes } from '../../types';

const ControlButton: React.FC<ButtonAttributes> = ({ atr }): ReactNode => {
  const { onClick, className, classIcon } = atr;

  return (
    <button
      type="button"
      className={`btn d-block btn-${className}`}
      onClick={onClick}
      style={{ minWidth: 50, minHeight: 50 }}
    >
      <i className={`fa-sharp fa-solid ${classIcon}`} />
    </button>
  );
};

export default ControlButton;
