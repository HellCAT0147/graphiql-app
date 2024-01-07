import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Visibility } from '../../../store/reducers';

import { InputsGroup } from '../../../constants';
import InputGroup from '../input-group';

const ToolsForm: React.FC = (): JSX.Element => {
  const isToolsVisible = useAppSelector(Visibility.tools.select);
  const dispatch = useAppDispatch();

  const { inputs, group } = InputsGroup.tools;

  function setVisibilityTools() {
    if (!isToolsVisible) dispatch(Visibility.tools.set(true));
  }

  function onChangeTools(e: FormEvent<HTMLFormElement>) {
    setVisibilityTools();
    if (e.target instanceof HTMLInputElement)
      dispatch(Inputs.currentTools.set(e.target.value));
  }

  return (
    <form
      className="btn-group flex-wrap me-2"
      role="group"
      onChange={(e) => onChangeTools(e)}
    >
      {inputs.map((input) => {
        const id = `${input.value}-${input.type}`;
        return <InputGroup key={id} atr={{ ...input, id, group }} />;
      })}
    </form>
  );
};

export default ToolsForm;
