import CodeMirror from '@uiw/react-codemirror';
import { okaidiaInit } from '@uiw/codemirror-theme-okaidia';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import { ReactNode } from 'react';

const Prettify: React.FC = (): ReactNode => {
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

export default Prettify;
