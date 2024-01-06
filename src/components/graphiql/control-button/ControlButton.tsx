import { ReactNode } from 'react';
import { ButtonAttributes } from '../../types';

const ControlButton: React.FC<ButtonAttributes> = ({ atr }): ReactNode => {
  const { onClick, className, classIcon, isLoadingData } = atr;

  return (
    <button
      type="button"
      className={`btn d-block btn-${className}`}
      onClick={onClick}
      style={{ minWidth: 50, minHeight: 50 }}
      disabled={isLoadingData}
    >
      {isLoadingData ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden" role="status">
            Loading...
          </span>
        </>
      ) : (
        <i className={`fa-sharp fa-solid ${classIcon}`} />
      )}
    </button>
  );
};

export default ControlButton;
