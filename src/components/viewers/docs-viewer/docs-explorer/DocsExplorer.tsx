import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { isAllTypes } from '../../../../utils/typeguards';
import MainTypeList from '../main-type-list';
import TypeList from '../type-list';

const DocsExplorer: React.FC = (): JSX.Element => {
  const data = useAppSelector(Docs.currentData.select);

  return (
    <section className="btn-group-vertical">
      {isAllTypes(data) ? (
        <MainTypeList types={data} />
      ) : typeof data === 'string' ? (
        data
      ) : (
        <TypeList types={data.fields} description={data.description} />
      )}
    </section>
  );
};

export default DocsExplorer;
