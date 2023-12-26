import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { DocsPage } from '../../../../store/types';
import { isAllTypes, isSchemaItems } from '../../../../utils/typeguards';
import { HistoryStep } from '../../../types';
import Back from '../back';
import MainSchemaList from '../main-schema-list';
import SchemaList from '../schema-list';

const DocsExplorer: React.FC = (): JSX.Element => {
  const data: DocsPage = useAppSelector(Docs.currentData.select);
  const history: HistoryStep[] = useAppSelector(Docs.history.select);
  const prevPageName: string | null = history.length
    ? history[history.length - 1].name
    : null;

  return (
    <section className="btn-group-vertical">
      {prevPageName && <Back prevPageName={prevPageName} />}
      {isAllTypes(data) ? (
        <MainSchemaList types={data} />
      ) : typeof data === 'string' ? (
        data
      ) : (
        <>
          <h4 className="card-title">{data.name}</h4>
          {isSchemaItems(data.fields) && (
            <>
              <SchemaList data={data.fields} description={data.description} />
            </>
          )}
        </>
      )}
    </section>
  );
};

export default DocsExplorer;
