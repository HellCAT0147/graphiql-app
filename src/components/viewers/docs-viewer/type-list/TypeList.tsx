import { useContext } from 'react';
import { LangContext } from '../../../../contexts/types';
import { Context } from '../../../../contexts';

import TypeItem from '../type-item';
import { TypeListProps } from '../../../types';

const TypeList: React.FC<TypeListProps> = ({
  types,
  header,
  description,
}): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { typesHeader },
  } = context;

  return (
    <>
      {description ? description : ''}
      <h4 className="card-title mt-3">{header ? header : typesHeader}</h4>
      {types.map((type, key) => (
        <TypeItem key={key} type={type} />
      ))}
    </>
  );
};

export default TypeList;
