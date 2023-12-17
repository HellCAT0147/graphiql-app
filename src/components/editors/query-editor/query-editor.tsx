import { FormEvent, useContext, useState } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useGetDataQuery } from '../../../store/reducers/api-slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Query } from '../../../store/reducers';

const QueryEditor: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { queryEditorTitle },
  } = context;

  const dispatch = useAppDispatch();
  const url = useAppSelector(Query.url.select);
  const method = useAppSelector(Query.method.select);
  const headers = useAppSelector(Query.headers.select);
  const body = useAppSelector(Query.body.select);

  const [urlApiInput, setUrlApiInput] = useState('');
  const [queryInput, setQueryInput] = useState('');

  const options = {
    url: url,
    method: method,
    headers: headers,
    body: body,
  };

  const { data } = useGetDataQuery({ ...options }, { skip: !body });

  const onSetApiURL = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Query.url.set(urlApiInput));
  };

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: {},
    });

    dispatch(Query.body.set(newBody));
  }

  return (
    <div className="card mb-3 mt-3">
      <div className="card-header d-flex justify-content-between">
        <h5>{queryEditorTitle}</h5>
        <form
          className="input-group mb-3"
          style={{ maxWidth: '20rem' }}
          onSubmit={(e) => onSetApiURL(e)}
        >
          <input
            type="text"
            className="form-control"
            placeholder="enter the URL..."
            onChange={(e) => setUrlApiInput(e.target.value)}
            value={urlApiInput}
          />
          <button className="btn btn-primary" type="submit" id="set-url">
            set API
          </button>
        </form>
      </div>
      <div className="card-body d-flex justify-content-between">
        <div className="card border-secondary mb-3" style={{ width: '45%' }}>
          <div className="card-header">Query</div>
          <div className="card-body">
            <div className="form-group">
              <textarea
                className="form-control"
                id="queryTextarea"
                rows={10}
                onChange={(e) => setQueryInput(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="card border-light mb-3" style={{ width: '45%' }}>
          <div className="card-header d-flex justify-content-between">
            <p className="mb-0">Response</p>
            <p className="mb-0">{url}</p>
          </div>
          <div className="card-body">
            <div className="form-group">
              <textarea
                className="form-control"
                id="responseTextarea"
                rows={10}
                readOnly
                value={data && JSON.stringify(data.data)}
              ></textarea>
            </div>
          </div>
        </div>
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

export default QueryEditor;
