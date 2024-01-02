import { useContext } from 'react';
import { LangContext } from '../../../../contexts/types';
import { Context } from '../../../../contexts';

import SchemaItem from '../schema-item';
import { MainSchemaListProps } from '../../../types';
import SchemaList from '../schema-list';
import Loader from '../loader';

const MainSchemaList: React.FC<MainSchemaListProps> = ({
  types,
}): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { rootTypesHeader, mainTypesHeader },
  } = context;

  return (
    <>
      <h4 className="card-title">{rootTypesHeader}</h4>
      {!types.types.length && <Loader margin="0" />}
      {types.rootTypes.query && (
        <SchemaItem data={types.rootTypes.query} isRoot={true} />
      )}
      {types.rootTypes.mutation && (
        <SchemaItem data={types.rootTypes.mutation} isRoot={true} />
      )}
      <SchemaList data={types.types} header={mainTypesHeader} />
      {!types.types.length && <Loader margin="0" />}
    </>
  );
};

export default MainSchemaList;
