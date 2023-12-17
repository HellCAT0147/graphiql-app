import { EmptyProps } from '../types';
import { Editor } from '../editors';

const Main: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <main className="main container-fluid">
      <Editor />
    </main>
  );
};

export default Main;
