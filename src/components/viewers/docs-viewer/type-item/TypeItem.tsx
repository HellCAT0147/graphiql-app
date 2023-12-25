import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { DocsPage, TypeProps } from '../../../../store/types';
import { typePreparer } from '../../../../utils/schema-resolvers';
import { isAllTypes } from '../../../../utils/typeguards';

const TypeItem: React.FC<TypeProps> = ({ type, isRoot }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { noDescription, docsHeader },
  } = context;

  const currentData: DocsPage = useAppSelector(Docs.currentData.select);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(
      Docs.history.add({
        name: isAllTypes(currentData) ? docsHeader : type.name, // TODO: fix bug with translation
        content: typePreparer(currentData, noDescription),
      })
    );
    dispatch(Docs.currentData.set(typePreparer(type, noDescription)));
  };

  return type ? (
    <button
      type="button"
      className={`btn ${isRoot ? 'btn-dark' : 'btn-primary'}`}
      style={{ fontSize: '0.95rem' }}
      onClick={handleClick}
    >
      {type.name}
    </button>
  ) : (
    <></>
  );
};

export default TypeItem;
