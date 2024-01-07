import { ReactNode } from 'react';
import EditorTools from './editor-tools';
import QueryEditor from './query-editor';

const Editors: React.FC = (): ReactNode => {
  return (
    <section className="card border-secondary mb-3 justify-content-between w-100">
      <QueryEditor />
      <EditorTools />
    </section>
  );
};

export default Editors;
