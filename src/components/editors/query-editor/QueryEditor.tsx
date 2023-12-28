import CodeMirror from '@uiw/react-codemirror';
import { okaidiaInit } from '@uiw/codemirror-theme-okaidia';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs } from '../../../store/reducers';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';

const QueryEditor: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { queryEditorTitle },
  } = context;

  const queryInput = useAppSelector(Inputs.query.select);
  const dispatch = useAppDispatch();

  return (
    <section>
      <h6 className="card-header">{queryEditorTitle}</h6>
      <div className="card-body">
        <div className="form-group">
          <CodeMirror
            value={queryInput}
            height="200px"
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

export default QueryEditor;
