import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../../components/types';

const Welcome: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTitle },
  } = context;

  return (
    <section className="welcome">
      <h1 className="text-info">{welcomeTitle}</h1>
    </section>
  );
};

export default Welcome;
