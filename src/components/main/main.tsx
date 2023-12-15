import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import { QueryEditor } from '../editors';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainTitle },
  } = context;

  return (
    <main className="main container-fluid">
      <h1>{mainTitle}</h1>
      <QueryEditor />
    </main>
  );
};

export default Main;
