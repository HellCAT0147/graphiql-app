import { EmptyProps } from '../types';
import { QueryEditor } from '../editors';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <main className="main container-fluid">
      <QueryEditor />
    </main>
  );
};

export default Main;
