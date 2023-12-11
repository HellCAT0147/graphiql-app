import { ErrorProps } from "../types";
import { useAppDispatch } from "../../store/hooks";
import { Message } from "../../store/reducers/message-slice";
import { useEffect } from "react";

import styles from "./error-message.module.scss";

const ErrorMessage: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { message } = props;

  useEffect(() => {
    dispatch(Message.set(message));
  }, [dispatch, message]);

  return (
    <div className={`${styles.errorMessage} card`}>
      <h2 className="title font-weight-bold text-warning">Oops!</h2>
      <h5 className="text-info">
        {message ? message : `Please reload the page.`}
      </h5>
    </div>
  );
};

export default ErrorMessage;
