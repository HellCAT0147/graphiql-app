import { EmptyProps } from '../types';
import EditorTools from './editor-tools';
import QueryEditor from './query-editor';

const Editors: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <section className="card border-secondary mb-3" style={{ width: '45%' }}>
      <QueryEditor />
      <EditorTools />
    </section>
  );
};

export default Editors;
