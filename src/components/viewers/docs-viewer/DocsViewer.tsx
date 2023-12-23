import { useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { Visibility } from '../../../store/reducers';

import { useGetSchemaQuery } from '../../../store/reducers/api-slice';
import { Options } from '../../../store/reducers';
import { getSchemaTypes } from '../../../utils/schema-resolvers';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { isSchema } from '../../../utils/typeguards';
import { Docs } from '../../../store/reducers/docs-slice';
import Screen from './screen';

const DocsViewer: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { docsHeader },
  } = context;

  const isDocsVisible = useAppSelector(Visibility.docs.select);
  const dispatch = useAppDispatch();

  const url = useAppSelector(Options.url.select);

  const { data, error } = useGetSchemaQuery(url);

  const onToggleDocsVisible = (): void => {
    dispatch(Visibility.docs.set(!isDocsVisible));
  };

  const handleError = (
    error: FetchBaseQueryError | SerializedError | undefined
  ): void => {
    error; // TODO: handle error: error can be undefined if data is not "schema" like
  };

  useEffect(() => {
    if (!error && isSchema(data))
      dispatch(Docs.mainData.set(getSchemaTypes(data)));
    else handleError(error);
  }, [data, dispatch, error]);

  return (
    <aside className="position-relative">
      <button
        type="button"
        className="btn btn-info position-absolute start-0 px-2 z-1"
        onClick={onToggleDocsVisible}
      >
        <i className="fs-3 fa-sharp fa-solid fa-book-tanakh"></i>
      </button>
      {isDocsVisible && (
        <div
          className="card border-info mb-3"
          style={{
            maxWidth: '15rem',
            minHeight: '90vh',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <div className="card-header text-end">{docsHeader}</div>
          <div className="card-body">
            <Screen />
          </div>
        </div>
      )}
    </aside>
  );
};

export default DocsViewer;
