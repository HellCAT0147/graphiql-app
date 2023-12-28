import CodeMirror from '@uiw/react-codemirror';
import { okaidiaInit } from '@uiw/codemirror-theme-okaidia';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import { ReactNode } from 'react';
import { PrettifyProps } from '../types';
import { useAppDispatch } from '../../store/hooks';
import { Inputs } from '../../store/reducers';

const Prettify: React.FC<PrettifyProps> = ({ data }): ReactNode => {
  const dispatch = useAppDispatch();
  const { className, width, title, value, isReadOnly } = data;
  return (
    <section className={className} style={{ width: `${width}` }}>
      <h6 className="card-header d-flex justify-content-between">{title}</h6>
      <div className="card-body">
        <div className="form-group">
          <CodeMirror
            value={value}
            readOnly={isReadOnly}
            theme={okaidiaInit({
              settings: {
                background: '#1a0933',
                gutterBackground: '#1a0933',
                fontFamily: 'monospace',
              },
              styles: [{ tag: t.bracket, color: '#ea39b8' }],
            })}
            extensions={[langs.tsx()]}
            onChange={(value) => {
              dispatch(Inputs.query.set(value));
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Prettify;
