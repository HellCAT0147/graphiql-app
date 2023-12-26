import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { DocsPage, SchemaItemProps } from '../../../../store/types';
import { dataPreparer, getTypeName } from '../../../../utils/schema-resolvers';
import { isAllTypes, isType, isField } from '../../../../utils/typeguards';

const SchemaItem: React.FC<SchemaItemProps> = ({
  data,
  isRoot,
}): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { noDescription, docsHeader },
  } = context;

  const currentData: DocsPage = useAppSelector(Docs.currentData.select);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(
      Docs.history.add({
        name: isAllTypes(currentData) ? docsHeader : data.name, // TODO: fix bug with translation
        content: dataPreparer(currentData, noDescription),
      })
    );
    dispatch(Docs.currentData.set(dataPreparer(data, 'null')));
  };

  return (
    <button
      type="button"
      className={`btn ${isRoot ? 'btn-dark' : 'btn-primary'}`}
      style={{ fontSize: '0.95rem' }}
      onClick={handleClick}
    >
      {isRoot ? (
        <>
          {data.name.toLowerCase()}:{' '}
          <span className="text-warning">{data.name}</span>
        </>
      ) : (
        <>
          {isType(data) ? (
            data.name
          ) : isField(data) ? (
            <>
              {data.name}:{' '}
              <span className="text-warning">{getTypeName(data.type, '')}</span>
            </>
          ) : (
            'undefined item'
          )}
        </>
      )}
    </button>
  );
};

export default SchemaItem;
