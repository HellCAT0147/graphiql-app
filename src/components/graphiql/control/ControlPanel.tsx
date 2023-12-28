import { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Options } from '../../../store/reducers';
import { isValidBrackets, onPrettify } from '../../../utils/prettify';

const ControlPanel: React.FC = (): ReactNode => {
  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);
  const variablesInput = useAppSelector(Inputs.variables.select);
  const headersInput = useAppSelector(Inputs.headers.select);

  const [isValidQuery, setIsValidQuery] = useState<boolean>(true);

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: variablesInput,
    });
    //TODO catch errors for incorrect headers or variables
    dispatch(Options.body.set(newBody));
    dispatch(Options.headers.set(headersInput ? JSON.parse(headersInput) : {}));
  }

  function onPrettifyQuery() {
    if (isValidBrackets(queryInput)) {
      dispatch(Inputs.query.set(onPrettify(queryInput)));
      setIsValidQuery(true);
    } else {
      setIsValidQuery(false);
    }
  }

  return (
    <article>
      <button
        type="button"
        className="btn btn-secondary d-block mb-3"
        onClick={onGetData}
        style={{ minWidth: 50, minHeight: 50 }}
      >
        <i className={`fs-2 px-1 fa-sharp fa-solid fa-caret-right`} />
      </button>
      <button
        type="button"
        className={`btn d-block btn-outline-${
          isValidQuery ? 'primary' : 'danger'
        }`}
        onClick={onPrettifyQuery}
        style={{ minWidth: 50, minHeight: 50 }}
      >
        <i className={`fs-5 py-1 fa-sharp fa-solid fa-broom-ball`} />
      </button>
    </article>
  );
};

export default ControlPanel;
