import { useForm } from 'react-hook-form';
import { ChangeEvent, FormEvent, useContext } from 'react';
import { Context } from '../../../contexts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Visibility } from '../../../store/reducers';

import { LangContext } from '../../../contexts/types';
import { isHTMLInputElement } from '../../../utils/typeguards';
import { Flags } from '../../../constants';

const EditorTools: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { headersButtonName, variablesButtonName },
  } = context;

  const { register, resetField } = useForm();

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

  function setVisibilityTools() {
    if (!isToolsVisible) dispatch(Visibility.tools.set(true));
  }

  function onChangeTools(e: FormEvent<HTMLFormElement>) {
    setVisibilityTools();
    if (isHTMLInputElement(e.target))
      dispatch(Inputs.currentTools.set(e.target.value));
  }

  function onSetToolsValue(e: ChangeEvent<HTMLTextAreaElement>) {
    if (isVariables) dispatch(Inputs.variables.set(e.target.value));
    if (isHeaders) dispatch(Inputs.headers.set(e.target.value));
  }

  return (
    <section className="editor-tools">
      <div className="px-3 d-flex justify-content-between">
        <form
          className="btn-group"
          role="group"
          onChange={(e) => onChangeTools(e)}
        >
          <input
            {...register(tools)}
            type="radio"
            className="btn-check"
            id={`${variables}-radio`}
            value={variables}
            checked={isToolsVisible && isVariables}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={`${variables}-radio`}
          >
            {variablesButtonName}
          </label>
          <input
            {...register(tools)}
            type="radio"
            className="btn-check"
            id={`${headers}-radio`}
            value={headers}
            checked={isToolsVisible && isHeaders}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={`${headers}-radio`}
          >
            {headersButtonName}
          </label>
        </form>
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
