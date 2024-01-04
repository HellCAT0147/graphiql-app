import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';

const NotFound: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { notFoundTitle, notFoundText },
  } = context;

  return (
    <section className="center-fixed">
      <h1 className="text-warning">{notFoundTitle}</h1>
      <p className="text-warning">{`(${notFoundText})`}</p>
    </section>
  );
};

export default NotFound;
