import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { SchemaTypeProps } from '../../../../store/types';
import SchemaList from '../schema-list';

const SchemaArgs: React.FC<SchemaTypeProps> = ({ data }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { argsHeader },
  } = context;

  if (data.args && data.args.length)
    return (
      <>
        <SchemaList data={data.args} header={argsHeader} />
        <p className="mt-2">
          {data.name}(
          {data.args.map((arg, i, args) => {
            if (i === args.length - 1) return arg.name;
            return `${arg.name}, `;
          })}
          )
        </p>
      </>
    );

  return <></>;
};

export default SchemaArgs;
