import { FormEvent, useContext, useState } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useGetDataQuery } from '../../../store/reducers/api-slice';

const QueryEditor: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const [urlApi, setUrlApi] = useState('');
  const [urlApiInput, setUrlApiInput] = useState('');
  const [query, setQuery] = useState('');
  const [queryInput, setQueryInput] = useState('');
  const {
    lang: { queryEditorTitle },
  } = context;

  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  };

  const graphqlQuery = {
    query: query,
    variables: {},
  };
  const options = {
    url: urlApi,
    method: 'POST',
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const { data } = useGetDataQuery({ ...options });

  const onSetApiURL = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrlApi(urlApiInput);
  };

  return (
    <div className="card border-primary mb-3">
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
            <p>Response</p>
            <p>{urlApi}</p>
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
          className="btn btn-outline-primary position-absolute top-50 start-50 translate-middle"
          onClick={() => setQuery(queryInput)}
        >
          Get Data
        </button>
      </div>
    </div>
  );
};

export default QueryEditor;
