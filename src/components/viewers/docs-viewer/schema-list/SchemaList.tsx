import { useContext } from 'react';
import { LangContext } from '../../../../contexts/types';
import { Context } from '../../../../contexts';

import SchemaItem from '../schema-item';
import { SchemaListProps } from '../../../types';

const SchemaList: React.FC<SchemaListProps> = ({
  data,
  header,
  description,
}): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { fieldsHeader },
  } = context;

  return (
    <>
      {description}
      {data && (
        <>
          <h6 className="mt-3">{header ? header : fieldsHeader}</h6>
          {data.map((item, key) => (
            <SchemaItem key={key} data={item} />
          ))}
        </>
      )}
    </>
  );
};

export default SchemaList;
