import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { Context } from '../../../contexts';
import { useAppSelector } from '../../../store/hooks';
import { Inputs, Visibility } from '../../../store/reducers';

import { LangContext } from '../../../contexts/types';
import { InputsGroupAttributes } from '../../types';

const InputGroup: React.FC<InputsGroupAttributes> = ({ atr }): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const { lang } = context;
  const { register } = useForm();

  const { group, type, value, classInput, classLabel, id } = atr;
  const isToolsVisible = useAppSelector(Visibility.tools.select);
  const currentTools = useAppSelector(Inputs.currentTools.select);
  const isActive = currentTools === value;

  return (
    <>
      <input
        {...register(group)}
        type={type}
        className={classInput}
        id={id}
        value={value}
        checked={isToolsVisible && isActive}
      />
      <label className={classLabel} htmlFor={id}>
        {lang[`${value}ButtonName`]}
      </label>
    </>
  );
};

export default InputGroup;
