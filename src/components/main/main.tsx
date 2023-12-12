import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { mainTitle },
  } = context;

  return <section className="main container-fluid">{mainTitle}</section>;
};

export default Main;
