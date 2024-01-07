import { ReactNode, useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Loading, Options } from '../../../store/reducers';
import { Message } from '../../../store/reducers/message-slice';
import { Context } from '../../../contexts';
import {
  getOperationName,
  isValidBrackets,
  onPrettify,
} from '../../../utils/prettify';
import ControlButton from '../control-button';

import { Body, OptionsHeaders, OptionsVariables } from '../../../store/types';
import { Base } from '../../../constants';
import { LangContext } from '../../../contexts/types';
const ControlPanel: React.FC = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { invalidVariables, invalidHeaders },
  } = context;

  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);
  const variablesInput = useAppSelector(Inputs.variables.select);
  const headersInput = useAppSelector(Inputs.headers.select);
  const isLoadingData = useAppSelector(Loading.select);

  const [isValidQuery, setIsValidQuery] = useState<boolean>(true);

  const newBody: Body = {
    query: queryInput,
  };

  function onSetVariables(): void {
    if (variablesInput) {
      try {
        const variables: OptionsVariables = JSON.parse(variablesInput);
        newBody.variables = variables;
        dispatch(Message.variables.reset());
        dispatch(Options.body.set(JSON.stringify(newBody)));
      } catch (error) {
        if (error instanceof Error)
          dispatch(
            Message.variables.set(`${invalidVariables} ${error.message}`)
          );
      }
    } else {
      dispatch(Message.variables.reset());
      dispatch(Options.body.set(JSON.stringify(newBody)));
    }
  }

  function onSetHeaders(): void {
    if (headersInput) {
      try {
        const headers: OptionsHeaders = JSON.parse(headersInput);
        dispatch(Message.headers.reset());
        dispatch(Options.headers.set(headers));
      } catch (error) {
        if (error instanceof Error)
          dispatch(Message.headers.set(`${invalidHeaders} ${error.message}`));
      }
    } else {
      dispatch(Message.headers.reset());
      dispatch(Options.headers.set(Base.headers));
    }
  }

  function setOperationName(query: string) {
    const operationName = getOperationName(query);
    if (operationName) {
      newBody.operationName = operationName;
    }
  }

  function onGetData(): void {
    setOperationName(queryInput);
    onSetVariables();
    onSetHeaders();
  }

  function onPrettifyQuery(): void {
    if (isValidBrackets(queryInput)) {
      const prettifiedQuery = onPrettify(queryInput);
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
