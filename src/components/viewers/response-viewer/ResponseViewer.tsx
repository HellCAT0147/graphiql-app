import { useContext, useEffect } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Options, useGetDataQuery } from '../../../store/reducers';
import Prettify from '../../prettify';
import { Message } from '../../../store/reducers/message-slice';

const ResponseViewer: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { responseViewerHeader },
  } = context;

  const url = useAppSelector(Options.url.select);
  const method = useAppSelector(Options.method.select);
  const headers = useAppSelector(Options.headers.select);
  const headersError = useAppSelector(Message.headers.select);
  const body = useAppSelector(Options.body.select);
  const dispatch = useAppDispatch();

  const { data, error } = useGetDataQuery(
    { url, method, headers, body },
    { skip: !body }
  );
  const content = !error ? (!headersError ? data : headersError) : error;
  const value = JSON.stringify(content, null, '  ');

  useEffect(() => {
    // dispatch(Message.headers.set(''));
  }, [dispatch]);

  return (
    <Prettify
      data={{
        className: 'responseViewer card border-light mb-3',
        width: '45%',
        title: responseViewerHeader,
        value,
        isReadOnly: true,
      }}
    />
  );
};

export default ResponseViewer;
