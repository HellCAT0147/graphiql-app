import { useContext } from 'react';
import { LangContext } from '../../../../contexts/types';
import { Context } from '../../../../contexts';

import TypeItem from '../type-item';
import { MainTypeListProps } from '../../../types';
import TypeList from '../type-list';

const MainTypeList: React.FC<MainTypeListProps> = ({ types }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { rootTypesHeader, mainTypesHeader },
  } = context;

  return (
    <>
      <h4 className="card-title">{rootTypesHeader}</h4>
      <TypeItem type={types.rootTypes.query} isRoot={true} />
      <TypeItem type={types.rootTypes.mutation} isRoot={true} />
      <TypeList types={types.types} header={mainTypesHeader} />
    </>
  );
};

export default MainTypeList;
