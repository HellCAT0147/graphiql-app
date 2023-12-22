import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';

const TypeList: React.FC = (): JSX.Element => {
  const data = useAppSelector(Docs.currentData.select);

  return (
    <section className="card-text">{data.map((type) => type.name)}</section>
  );
};

export default TypeList;
