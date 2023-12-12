import { useContext, useState } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
// import { useGetDataQuery } from '../../store/reducers/api-slice'; //TODO uncommented this line if you want to get data

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainTitle },
  } = context;

  const [page, setPage] = useState<string>('1');

  // const { data } = useGetDataQuery({ term: '', limit: '3', page }); //TODO uncommented this line if you want to get data

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
      {/* {//TODO uncommented next line if you want to show data} */}
      {/* <p>{data && JSON.stringify(data)}</p> */}
    </main>
  );
};

export default Main;
