import { EmptyProps } from '../types';
import GraphiQl from '../graphiql';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <main className="main container-fluid">
      <GraphiQl />
    </main>
  );
};

export default Main;
