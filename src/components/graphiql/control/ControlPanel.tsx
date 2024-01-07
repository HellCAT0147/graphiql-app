import { ReactNode, useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Loading, Options } from '../../../store/reducers';
import { Message } from '../../../store/reducers/message-slice';
import { Context } from '../../../contexts';
import {
  isValidBrackets,
  isValidSyntax,
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

  function onSetVariables(): void {
    const newBody: Body = {
      query: queryInput,
    };
    if (variablesInput) {
      try {
        const variables: OptionsVariables = JSON.parse(variablesInput);
        //TODO check and add operationName
        newBody.variables = variables;
        dispatch(Options.body.set(JSON.stringify(newBody)));
      } catch (error) {
        if (error instanceof Error)
          dispatch(Message.tools.set(`${invalidVariables} ${error.message}`));
      }
    } else {
      dispatch(Options.body.set(JSON.stringify(newBody)));
    }
  }

  function onSetHeaders(): void {
    if (headersInput) {
      try {
        const headers: OptionsHeaders = JSON.parse(headersInput);
        dispatch(Options.headers.set(headers));
      } catch (error) {
        if (error instanceof Error)
          dispatch(Message.tools.set(`${invalidHeaders} ${error.message}`));
      }
    } else {
      dispatch(Options.headers.set(Base.headers));
    }
  }

  function onGetData(): void {
    onSetVariables();
    onSetHeaders();
  }

  function onPrettifyQuery(): void {
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
