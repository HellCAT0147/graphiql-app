import { useContext, useEffect, lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { Visibility } from '../../../store/reducers';

import { useGetSchemaQuery } from '../../../store/reducers/api-slice';
import { Options } from '../../../store/reducers';
import { getSchemaItems } from '../../../utils/schema-resolvers';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { isSchema } from '../../../utils/typeguards';
import { Docs } from '../../../store/reducers/docs-slice';
import Button from './button';
import Loader from './loader';
const DocsExplorer = lazy(() => import('./docs-explorer'));

const DocsViewer: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { docsHeader },
  } = context;

  const isDocsVisible: boolean = useAppSelector(Visibility.docs.select);
  const dispatch = useAppDispatch();
  const url: string = useAppSelector(Options.url.select);
  const { data, error } = useGetSchemaQuery(url);

  const handleError = (
    error: FetchBaseQueryError | SerializedError | undefined
  ): void => {
    error; // TODO: handle error: error can be undefined if data is not "schema" like
  };

  useEffect(() => {
    if (!error && isSchema(data))
      dispatch(Docs.mainData.set(getSchemaItems(data)));
    else handleError(error);
  }, [data, dispatch, error]);

  return (
    <aside className="position-relative">
      {data ? (
        <Button isLoading={false} isError={false} />
      ) : error ? (
        <Button isLoading={false} isError={true} />
      ) : (
        <Button isLoading={true} isError={false} />
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
