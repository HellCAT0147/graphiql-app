import { useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';
import { useGetDataQuery } from '../../../store/reducers/api-slice';
import { useAppSelector } from '../../../store/hooks';
import { Options } from '../../../store/reducers';

const ResponseViewer: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { responseViewerHeader },
  } = context;

  const url = useAppSelector(Options.url.select);
  const method = useAppSelector(Options.method.select);
  const headers = useAppSelector(Options.headers.select);
  const body = useAppSelector(Options.body.select);

  const { data } = useGetDataQuery(
    { url, method, headers, body },
    { skip: !body }
  );

  return (
    <section className="card border-light mb-3" style={{ width: '45%' }}>
      <h6 className="card-header d-flex justify-content-between">
        {responseViewerHeader}
      </h6>
      <div className="card-body">
        <div className="form-group">
          <textarea
            className="form-control"
            id="responseTextarea"
            rows={10}
            readOnly
            value={data && JSON.stringify(data.data)}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default ResponseViewer;
