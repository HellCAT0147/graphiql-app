import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';
import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { AllTypes, DocsPage } from '../../../../store/types';
import { getType } from '../../../../utils/schema-resolvers';
import { isAllTypes, isField, isType } from '../../../../utils/typeguards';
import { HistoryStep, SchemaField } from '../../../types';
import Back from '../back';
import MainSchemaList from '../main-schema-list';
import SchemaItem from '../schema-item';
import SchemaList from '../schema-list';

const DocsExplorer: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { typeHeader },
  } = context;

  const data: DocsPage = useAppSelector(Docs.currentData.select);
  const history: HistoryStep[] = useAppSelector(Docs.history.select);
  const mainData: AllTypes = useAppSelector(Docs.mainData.select);
  const prevPageName: string | null = history.length
    ? history[history.length - 1].name
    : null;

  const handleType = (data: SchemaField): JSX.Element => {
    const type = getType(data.type, mainData);
    if (type)
      return (
        <>
          <h6 className="mt-3">{typeHeader}</h6>
          <SchemaItem data={type} />
        </>
      );
    return <></>;
  };

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
            />
          ) : (
            isField(data) && (
              <>
                <SchemaList data={null} description={data.description} />
                {handleType(data)}
              </>
            )
          )}
        </>
      )}
    </section>
  );
};

export default DocsExplorer;
