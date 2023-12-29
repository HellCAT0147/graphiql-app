import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { AllTypes, SchemaTypeProps } from '../../../../store/types';
import { getType } from '../../../../utils/schema-resolvers';
import SchemaItem from '../schema-item';

const SchemaType: React.FC<SchemaTypeProps> = ({ data }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { typeHeader },
  } = context;

  const mainData: AllTypes = useAppSelector(Docs.mainData.select);
  const type = getType(data.type, mainData);

  if (type)
    return (
      <>
        <h6 className="mt-3">{typeHeader}</h6>
        <SchemaItem data={type} />
      </>
    );

  return <></>;
};

export default SchemaType;
