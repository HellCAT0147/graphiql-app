import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Inputs, Options } from '../../store/reducers';

import { ResponseViewer } from '../viewers';
import { QueryEditor, UrlEditor } from '../editors';

import { EmptyProps } from '../types';

const GraphiQl: React.FC<EmptyProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: {},
    });

    dispatch(Options.body.set(newBody));
  }

  return (
    <div className="card mb-3 mt-3">
      <UrlEditor />
      <div className="card-body d-flex justify-content-between">
        <QueryEditor />
        <ResponseViewer />
        <button
          type="button"
          className="btn btn-secondary position-absolute top-50 start-50 translate-middle"
          onClick={onGetData}
        >
          {'\u25BA'}
        </button>
      </div>
    </div>
  );
};

export default GraphiQl;
