import CodeMirror from '@uiw/react-codemirror';
import { okaidiaInit } from '@uiw/codemirror-theme-okaidia';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useGetDataQuery } from '../../../store/reducers/api-slice';
import { useAppSelector } from '../../../store/hooks';
import { Options } from '../../../store/reducers';

const ResponseViewer: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { responseViewerHeader },
  } = context;

  const url = useAppSelector(Options.url.select);
  const method = useAppSelector(Options.method.select);
  const headers = useAppSelector(Options.headers.select);
  const body = useAppSelector(Options.body.select);

  const { data } = useGetDataQuery(
    { url, method, headers, body },
    { skip: !body }
  );

  return (
    <section className="card border-light mb-3" style={{ width: '45%' }}>
      <h6 className="card-header d-flex justify-content-between">
        {responseViewerHeader}
      </h6>
      <div className="card-body">
        <div className="form-group">
          <CodeMirror
            value={JSON.stringify(data, null, '  ')}
            readOnly
            theme={okaidiaInit({
              settings: {
                background: '#1a0933',
                gutterBackground: '#1a0933',
                fontFamily: 'monospace',
              },
              styles: [{ tag: t.bracket, color: '#ea39b8' }],
            })}
            extensions={[langs.tsx()]}
          />
        </div>
      </div>
    </section>
  );
};

export default ResponseViewer;
