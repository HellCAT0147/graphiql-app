import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';
import { useAppSelector } from '../../../../store/hooks';
import { DocsPage } from '../../../../store/types';
import { isAllTypes, isField, isType } from '../../../../utils/typeguards';
import { HistoryStep } from '../../../types';
import Back from '../back';
import SchemaList from '../schema-list';
import SchemaType from '../schema-type';
import SchemaArgs from '../schema-args';
import MainSchemaList from '../main-schema-list';
import { Docs } from '../../../../store/reducers';

const DocsExplorer: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { fieldsHeader },
  } = context;

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
      ) : (
        <>
          <h4 className="card-title">{data.name}</h4>
          {isType(data) ? (
            <SchemaList
              data={data.fields || data.inputFields}
              description={data.description}
              header={fieldsHeader}
            />
          ) : (
            isField(data) && (
              <>
                {data.description}
                <SchemaType data={data} />
                <SchemaArgs data={data} />
              </>
            )
          )}
        </>
      )}
    </section>
  );
};

export default DocsExplorer;
