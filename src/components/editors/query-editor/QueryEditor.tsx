import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { aura } from '@uiw/codemirror-theme-aura';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs } from '../../../store/reducers';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';

const QueryEditor: React.FC<EmptyProps> = (): JSX.Element => {
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
          <textarea
            className="form-control"
            id="queryTextarea"
            rows={10}
            onChange={(e) => dispatch(Inputs.query.set(e.target.value))}
            value={queryInput}
          ></textarea>
          <CodeMirror value={queryInput} height="200px" theme={aura} />
        </div>
      </div>
    </section>
  );
};

export default QueryEditor;
