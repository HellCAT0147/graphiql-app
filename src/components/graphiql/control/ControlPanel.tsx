import { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Options } from '../../../store/reducers';
import { isValidBrackets, onPrettify } from '../../../utils/prettify';
import ControlButton from '../control-button';

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
      <ControlButton
        atr={{
          className: 'secondary mb-3',
          onClick: onGetData,
          classIcon: 'fa-caret-right px-1 fs-2',
        }}
      />
      <ControlButton
        atr={{
          className: `outline-${isValidQuery ? 'primary' : 'danger'}`,
          onClick: onPrettifyQuery,
          classIcon: 'fa-broom-ball py-1 fs-5',
        }}
      />
    </article>
  );
};

export default ControlPanel;
