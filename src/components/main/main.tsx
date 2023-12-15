import { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {
  DocumentData,
  Query,
  QuerySnapshot,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
// import { useGetDataQuery } from '../../store/reducers/api-slice'; //TODO uncomment this line if you want to get data

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainTitle, mainGreeting },
  } = context;

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (error) throwError(error);
  }, [error]);

  const throwError = (error: Error) => {
    error;
    // TODO: tostify error
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q: Query<DocumentData, DocumentData> = query(
          collection(db, 'users'),
          where('uid', '==', user?.uid)
        );
        const doc: QuerySnapshot<DocumentData, DocumentData> = await getDocs(q);
        const data: DocumentData = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        // TODO: handle error
      }
    };
    if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading, navigate]);

  const [page, setPage] = useState<string>('1');

  // const { data } = useGetDataQuery({ term: '', limit: '3', page }); //TODO uncomment this line if you want to get data

  function onGetData() {
    setPage(`${+page + 1}`);
  }

  return user ? (
    <main className="main container-fluid">
      <h1>{`${mainGreeting} ${name}`}</h1>
      {mainTitle}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={onGetData}
      >
        Get Data
      </button>
      {/* {//TODO uncomment next line if you want to show data} */}
      {/* <p>{data && JSON.stringify(data)}</p> */}
    </main>
  ) : (
    <></>
  );
};

export default Main;
