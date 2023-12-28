import { useContext } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Inputs } from '../../../store/reducers';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import Prettify from '../../prettify';

const QueryEditor: React.FC = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { queryEditorTitle },
  } = context;

  const queryInput = useAppSelector(Inputs.query.select);

  return (
    <Prettify
      data={{
        className: 'query-editor',
        width: '100%',
        title: queryEditorTitle,
        value: queryInput,
        isReadOnly: false,
      }}
    />
  );
};

export default QueryEditor;
