import { useContext, useEffect, lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { Docs, Visibility, useGetSchemaQuery } from '../../../store/reducers';

import { Options } from '../../../store/reducers';
import { getSchemaItems } from '../../../utils/schema-resolvers';
import { isSchema } from '../../../utils/typeguards';
import Button from './button';
import Loader from './loader';
import { handleSchemaError } from '../../../utils/handlers';

const DocsExplorer = lazy(() => import('./docs-explorer'));

const DocsViewer: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { docsHeader, notSchema },
  } = context;

  const isDocsVisible: boolean = useAppSelector(Visibility.docs.select);
  const dispatch = useAppDispatch();
  const url: string = useAppSelector(Options.url.select);
  const { data, error, isFetching } = useGetSchemaQuery(url);

  useEffect(() => {
    if (!error && isSchema(data))
      dispatch(Docs.mainData.set(getSchemaItems(data)));
    else if (data) handleSchemaError(error, notSchema);
  }, [data, dispatch, error, notSchema]);

  return (
    <aside className="position-relative">
      {isFetching ? (
        <Button isLoading={true} isError={false} />
      ) : error ? (
        <Button isLoading={false} isError={true} />
      ) : (
        <Button isLoading={false} isError={false} />
      )}
      {isDocsVisible && (
        <div
          className="card border-info mb-3"
          style={{
            minWidth: '8rem',
            maxWidth: '15rem',
            minHeight: '90vh',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <div className="card-header text-end">{docsHeader}</div>
          <div className="card-body">
            <Suspense fallback={<Loader />}>
              <DocsExplorer />
            </Suspense>
          </div>
        </div>
      )}
    </aside>
  );
};

export default DocsViewer;
