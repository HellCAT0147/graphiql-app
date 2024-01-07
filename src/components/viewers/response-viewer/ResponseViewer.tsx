import { ReactNode, useContext, useEffect } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Loading, Options, useGetDataQuery } from '../../../store/reducers';
import Prettify from '../../prettify';
import { Message } from '../../../store/reducers/message-slice';
import { isErrorData } from '../../../utils/typeguards';

const ResponseViewer: React.FC = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { responseViewerHeader },
  } = context;

  const dispatch = useAppDispatch();
  const url = useAppSelector(Options.url.select);
  const method = useAppSelector(Options.method.select);
  const headers = useAppSelector(Options.headers.select);
  const headersError = useAppSelector(Message.headers.select);
  const variablesError = useAppSelector(Message.variables.select);
  const body = useAppSelector(Options.body.select);

  const { data, error, isFetching } = useGetDataQuery(
    { url, method, headers, body },
    { skip: !body }
  );

  useEffect(() => {
    dispatch(Loading.set(isFetching));
  }, [dispatch, isFetching]);

  const errorTools: string = headersError ? headersError : variablesError;

  const content = !error
    ? !errorTools
      ? data
      : errorTools
    : isErrorData(error)
      ? error.data
      : error;
  const value = JSON.stringify(content, null, '  ');

  return (
    <Prettify
      data={{
        className: 'responseViewer card border-light mb-3',
        width: '45%',
        title: responseViewerHeader,
        value: isFetching ? '' : value,
        isReadOnly: true,
      }}
    />
  );
};

export default ResponseViewer;
