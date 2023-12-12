import { useContext, useEffect } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { useAppDispatch } from '../../store/hooks';
import { Message } from '../../store/reducers/message-slice';
import { ErrorProps } from '../types';

import styles from './error-message.module.scss';

const ErrorMessage: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { errorTitle, errorMessageText },
  } = context;

  const { message } = props;

  useEffect(() => {
    dispatch(Message.set(message));
  }, [dispatch, message]);

  return (
    <div className={`${styles.errorMessage} card`}>
      <h2 className="title font-weight-bold text-warning">{errorTitle}</h2>
      <h5 className="text-info">{message ? message : `${errorMessageText}`}</h5>
    </div>
  );
};

export default ErrorMessage;
