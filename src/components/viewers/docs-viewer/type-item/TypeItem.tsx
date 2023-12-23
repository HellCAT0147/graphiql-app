import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { useAppDispatch } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { TypeProps } from '../../../../store/types';
import { typePreparer } from '../../../../utils/schema-resolvers';

const TypeItem: React.FC<TypeProps> = ({ type, isRoot }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { noDescription },
  } = context;

  const dispatch = useAppDispatch();

  const handleTransition = (): void => {
    dispatch(Docs.currentData.set(typePreparer(type, noDescription)));
  };

  return type ? (
    <button
      type="button"
      className={`btn ${isRoot ? 'btn-dark' : 'btn-primary'}`}
      style={{ fontSize: '0.95rem' }}
      onClick={handleTransition}
    >
      {type.name}
    </button>
  ) : (
    <></>
  );
};

export default TypeItem;
