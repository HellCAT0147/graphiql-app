import { useForm } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Visibility } from '../../../store/reducers';

import { Flags } from '../../../constants';
import { ToolsForm } from '../../forms';

const EditorTools: React.FC = (): JSX.Element => {
  const { resetField } = useForm();

  const isToolsVisible = useAppSelector(Visibility.tools.select);
  const currentTools = useAppSelector(Inputs.currentTools.select);
  const variablesValue = useAppSelector(Inputs.variables.select);
  const headersValue = useAppSelector(Inputs.headers.select);
  const dispatch = useAppDispatch();

  const { tools, variables, headers, down, up } = Flags;

  const isVariables = currentTools === variables;
  const isHeaders = currentTools === headers;

  function onToggleToolsVisible() {
    if (isToolsVisible) resetField(tools);
    dispatch(Visibility.tools.set(!isToolsVisible));
  }

  function onSetToolsValue(e: ChangeEvent<HTMLTextAreaElement>) {
    if (isVariables) dispatch(Inputs.variables.set(e.target.value));
    if (isHeaders) dispatch(Inputs.headers.set(e.target.value));
  }

  return (
    <section className="editor-tools">
      <div className="px-3 d-flex justify-content-between">
        <ToolsForm />
        <button
          type="button"
          className="btn btn-dark"
          onClick={onToggleToolsVisible}
        >
          <i
            className={`px-1 fa-sharp fa-solid fa-caret-${
              isToolsVisible ? down : up
            }`}
          />
        </button>
      </div>
      <div className="card-body">
        <div className="form-group">
          {isToolsVisible && (
            <textarea
              className="form-control"
              id="toolsTextarea"
              onChange={onSetToolsValue}
              value={isVariables ? variablesValue : headersValue}
            ></textarea>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditorTools;
