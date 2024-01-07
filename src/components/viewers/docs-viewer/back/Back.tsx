import { ReactNode, useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers';
import { DocsPage } from '../../../../store/types';
import { BackProps, HistoryStep } from '../../../types';

const Back: React.FC<BackProps> = ({ prevPageName }): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { docsHeader },
  } = context;

  const dispatch = useAppDispatch();
  const history: HistoryStep[] = useAppSelector(Docs.history.select);
  const prevPageContent: DocsPage | null = history.length
    ? history[history.length - 1].content
    : null;

  const handleClick = (): void => {
    if (prevPageContent) {
      const tempPrevPageContent: DocsPage = prevPageContent;
      dispatch(Docs.history.subtract());
      dispatch(Docs.currentData.set(tempPrevPageContent));
    }
  };

  return (
    <button
      type="button"
      className="btn btn-link mb-2 px-0"
      onClick={handleClick}
      style={{ maxWidth: 'fit-content' }}
    >
      <i className="fa-sharp fa-solid fa-arrow-left"></i>{' '}
      {prevPageName === 'docsHeader' ? docsHeader : prevPageName}
    </button>
  );
};

export default Back;
