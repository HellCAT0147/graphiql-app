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
    <section className="not-found text-center my-3">
      <img
        className="not-found-image"
        src={'/not-found.png'}
        alt={'not-found-image'}
        style={{ maxWidth: 300, maxHeight: 300 }}
      ></img>
      <h1 className="text-primary">{notFoundTitle}</h1>
      <p className="text-secondary">{`(${notFoundText})`}</p>
    </section>
  );
};

export default NotFound;
