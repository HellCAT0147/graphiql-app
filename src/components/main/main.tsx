import { useContext, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import { useGetDataQuery } from '../../store/reducers/api-slice';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainTitle },
  } = context;

  const [page, setPage] = useState<string>('1');

  const { data } = useGetDataQuery({ term: '', limit: '3', page });

  function onGetData() {
    setPage(`${+page + 1}`);
  }

  return (
    <main className="main container-fluid">
      {mainTitle}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={onGetData}
      >
        Get Data
      </button>
      <p>{data && JSON.stringify(data)}</p>
    </main>
  );
};

export default Main;
