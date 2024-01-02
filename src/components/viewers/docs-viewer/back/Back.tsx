import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers';
import { DocsPage } from '../../../../store/types';
import { BackProps, HistoryStep } from '../../../types';

const Back: React.FC<BackProps> = ({ prevPageName }): JSX.Element => {
  const dispatch = useAppDispatch();
  const history: HistoryStep[] = useAppSelector(Docs.history.select);
  const prevPageContent: DocsPage | null = history.length
    ? history[history.length - 1].content
    : null;

  const handleClick = (): void => {
    if (prevPageContent) {
      dispatch(Docs.currentData.set(prevPageContent));
      dispatch(Docs.history.subtract());
    }
  };

  return (
    <a href="#" className="mb-2" onClick={handleClick}>
      <i className="fa-sharp fa-solid fa-arrow-left"></i> {prevPageName}
    </a>
  );
};

export default Back;
