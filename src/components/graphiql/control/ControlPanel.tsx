import { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Loading, Options } from '../../../store/reducers';
import {
  isValidBrackets,
  isValidSyntax,
  onPrettify,
} from '../../../utils/prettify';
import ControlButton from '../control-button';
import { OptionsHeaders } from '../../../store/types';
import { Message } from '../../../store/reducers/message-slice';

const ControlPanel: React.FC = (): ReactNode => {
  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);
  const variablesInput = useAppSelector(Inputs.variables.select);
  const headersInput = useAppSelector(Inputs.headers.select);
  const isLoadingData = useAppSelector(Loading.select);

  const [isValidQuery, setIsValidQuery] = useState<boolean>(true);

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: variablesInput,
    });
    //TODO catch errors for incorrect headers or variables
    let headers: OptionsHeaders = {};
    dispatch(Options.body.set(newBody));
    if (headersInput) {
      try {
        headers = JSON.parse(headersInput);
      } catch (error) {
        if (error instanceof Error)
          dispatch(Message.headers.set(error.message));
      }
    }
    dispatch(Options.headers.set(headers));
  }

  function onPrettifyQuery() {
    const prettifiedQuery = onPrettify(queryInput);
    if (isValidBrackets(queryInput) && isValidSyntax(prettifiedQuery)) {
      dispatch(Inputs.query.set(prettifiedQuery));
      setIsValidQuery(true);
    } else {
      setIsValidQuery(false);
    }
  }

  return (
    <article>
      <ControlButton
        atr={{
          isLoadingData,
          className: 'secondary mb-3',
          onClick: onGetData,
          classIcon: 'fa-caret-right px-1 fs-2',
        }}
      />
      <ControlButton
        atr={{
          isLoadingData: false,
          className: `outline-${isValidQuery ? 'primary' : 'danger'}`,
          onClick: onPrettifyQuery,
          classIcon: 'fa-broom-ball py-1 fs-5',
        }}
      />
    </article>
  );
};

export default ControlPanel;
