import { useContext } from 'react';
import { Context } from '../../../contexts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Visibility } from '../../../store/reducers';

import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';

const EditorTools: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { headersButtonName, variablesButtonName },
  } = context;

  const isToolsVisible = useAppSelector(Visibility.tools.select);
  const dispatch = useAppDispatch();

  function onToggleToolsVisible() {
    dispatch(Visibility.tools.set(!isToolsVisible));
  }

  function setVisibilityTools() {
    if (!isToolsVisible) dispatch(Visibility.tools.set(true));
  }

  return (
    <section className="editor-tools">
      <div className="px-3 d-flex justify-content-between">
        <div className="btn-group" role="group">
          <input
            type="radio"
            className="btn-check"
            name="request-options"
            id="variables-radio"
            onClick={setVisibilityTools}
          />
          <label className="btn btn-outline-primary" htmlFor="variables-radio">
            {variablesButtonName}
          </label>
          <input
            type="radio"
            className="btn-check"
            name="request-options"
            id="headers-radio"
            onClick={setVisibilityTools}
          />
          <label className="btn btn-outline-primary" htmlFor="headers-radio">
            {headersButtonName}
          </label>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={onToggleToolsVisible}
        >
          <i
            className={`px-1 fa-sharp fa-solid fa-caret-${
              isToolsVisible ? 'down' : 'up'
            }`}
          />
        </button>
      </div>
      <div className="card-body">
        <div className="form-group">
          {isToolsVisible && (
            <textarea className="form-control" id="queryTextarea"></textarea>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditorTools;
