import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Inputs, Options } from '../../store/reducers';

import { ResponseViewer } from '../viewers';
import { Editors, UrlEditor } from '../editors';

import { EmptyProps } from '../types';

const GraphiQl: React.FC<EmptyProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);
  const variablesInput = useAppSelector(Inputs.variables.select);
  const headersInput = useAppSelector(Inputs.headers.select);

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: variablesInput,
    });
    //TODO catch errors for incorrect headers or variables
    dispatch(Options.body.set(newBody));
    dispatch(Options.headers.set(headersInput ? JSON.parse(headersInput) : {}));
  }

  return (
    <article className="card mb-3 mx-5 flex-grow-1">
      <UrlEditor />
      <section className="card-body d-flex justify-content-between">
        <Editors />
        <ResponseViewer />
        <button
          type="button"
          className="btn btn-secondary position-absolute top-50 start-50 translate-middle"
          onClick={onGetData}
        >
          <i className={`fs-2 px-1 fa-sharp fa-solid fa-caret-right`} />
        </button>
      </section>
    </article>
  );
};

export default GraphiQl;
