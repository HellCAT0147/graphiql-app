import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { DocsPage } from '../../../../store/types';
import { isAllTypes } from '../../../../utils/typeguards';
import { HistoryStep } from '../../../types';
import Back from '../back';
import MainTypeList from '../main-type-list';
import TypeList from '../type-list';

const DocsExplorer: React.FC = (): JSX.Element => {
  const data: DocsPage = useAppSelector(Docs.currentData.select);
  const history: HistoryStep[] = useAppSelector(Docs.history.select);
  const prevPageName: string | null = history.length
    ? history[history.length - 1].name
    : null;

  return (
    <section className="btn-group-vertical">
      {prevPageName ? <Back prevPageName={prevPageName} /> : ''}
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
