import { useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs } from '../../../store/reducers';

const QueryEditor: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { queryEditorTitle },
  } = context;

  const queryInput = useAppSelector(Inputs.query.select);
  const dispatch = useAppDispatch();

  return (
    <div className="card border-secondary mb-3" style={{ width: '45%' }}>
      <div className="card-header">{queryEditorTitle}</div>
      <div className="card-body">
        <div className="form-group">
          <textarea
            className="form-control"
            id="queryTextarea"
            rows={10}
            onChange={(e) => dispatch(Inputs.query.set(e.target.value))}
            value={queryInput}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QueryEditor;
