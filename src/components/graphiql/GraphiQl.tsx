import { ResponseViewer } from '../viewers';
import { Editors, UrlEditor } from '../editors';

import { EmptyProps } from '../types';
import ControlPanel from './control';

const GraphiQl: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <article className="card mb-3 mx-lg-5 flex-grow-1 order-0 order-lg-1">
      <UrlEditor />
      <section className="card-body d-flex justify-content-between flex-column flex-md-row gap-2">
        <Editors />
        <ControlPanel />
        <ResponseViewer />
      </section>
    </article>
  );
};

export default GraphiQl;
