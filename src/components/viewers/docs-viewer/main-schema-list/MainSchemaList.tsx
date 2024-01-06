import { useContext, ReactNode } from 'react';
import { LangContext } from '../../../../contexts/types';
import { Context } from '../../../../contexts';

import SchemaItem from '../schema-item';
import { MainSchemaListProps } from '../../../types';
import SchemaList from '../schema-list';

const MainSchemaList: React.FC<MainSchemaListProps> = ({
  types,
}): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { rootTypesHeader, mainTypesHeader },
  } = context;

  return (
    <>
      <h4 className="card-title">{rootTypesHeader}</h4>
      {types.rootTypes.query && (
        <SchemaItem data={types.rootTypes.query} isRoot={true} />
      )}
      {types.rootTypes.mutation && (
        <SchemaItem data={types.rootTypes.mutation} isRoot={true} />
      )}
      <SchemaList data={types.types} header={mainTypesHeader} />
    </>
  );
};

export default MainSchemaList;
