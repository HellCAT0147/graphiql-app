import { useContext, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import { useGetDataQuery } from '../../store/reducers/api-slice';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const [query, setQuery] = useState('');
  const {
    lang: { mainTitle },
  } = context;
  const querySchema = `{ __schema { types { name } } }`;
  const queryRequest = `query { characters { info { count pages next prev } } }`;
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  };

  const graphqlQuery = {
    query: query,
    variables: {},
  };
  const options = {
    url: 'https://rickandmortyapi.com/graphql',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const { data } = useGetDataQuery({ ...options });

  return (
    <main className="main container-fluid">
      {mainTitle}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setQuery(queryRequest)}
      >
        Get Data
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setQuery(querySchema)}
      >
        Get Schema
      </button>
      <p>{data && JSON.stringify(data)}</p>
    </main>
  );
};

export default Main;
