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
      <div className="px-3 d-flex justify-content-between">
        <div className="btn-group" role="group">
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
        <button type="button" className="btn btn-dark">
          <i className="px-1 fa-sharp fa-solid fa-caret-down" />
        </button>
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
