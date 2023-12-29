import { ResponseViewer } from '../viewers';
import { Editors, UrlEditor } from '../editors';

import { EmptyProps } from '../types';
import ControlPanel from './control';

const GraphiQl: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <article className="card mb-3 mx-5 flex-grow-1">
      <UrlEditor />
      <section className="card-body d-flex justify-content-between">
        <Editors />
        <ControlPanel />
        <ResponseViewer />
      </section>
    </article>
  );
};

export default GraphiQl;
