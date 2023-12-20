import { useContext } from 'react';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';

const EditorTools: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { headersButtonName, variablesButtonName },
  } = context;

  return (
    <section className="editor-tools">
      <div className="btn-group px-3" role="group">
        <input
          type="radio"
          className="btn-check"
          name="request-options"
          id="variables-radio"
        />
        <label className="btn btn-outline-primary" htmlFor="variables-radio">
          {variablesButtonName}
        </label>
        <input
          type="radio"
          className="btn-check"
          name="request-options"
          id="headers-radio"
        />
        <label className="btn btn-outline-primary" htmlFor="headers-radio">
          {headersButtonName}
        </label>
      </div>
      <div className="card-body">
        <div className="form-group">
          <textarea className="form-control" id="queryTextarea"></textarea>
        </div>
      </div>
    </section>
  );
};

export default EditorTools;
