import { useContext } from 'react';
import { Context } from '../../../../contexts';
import { LangContext } from '../../../../contexts/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Docs } from '../../../../store/reducers/docs-slice';
import { AllTypes, DocsPage, SchemaItemProps } from '../../../../store/types';
import {
  getType,
  getTypeName,
  showArgsExisting,
} from '../../../../utils/schema-resolvers';
import { isAllTypes, isType, isField } from '../../../../utils/typeguards';

const SchemaItem: React.FC<SchemaItemProps> = ({
  data,
  isRoot,
}): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { noDescription, docsHeader, undefinedItem },
  } = context;

  const currentData: DocsPage = useAppSelector(Docs.currentData.select);
  const mainData: AllTypes = useAppSelector(Docs.mainData.select);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(
      Docs.history.add({
        name: isAllTypes(currentData) ? docsHeader : currentData.name, // TODO: fix bug with translation
        content: currentData || noDescription,
      })
    );

    const type = getType(data.name, mainData);
    dispatch(Docs.currentData.set(type || data));
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
              {data.name}
              {showArgsExisting(data.args)}:{' '}
              <span className="text-warning">{getTypeName(data.type)}</span>
            </>
          ) : (
            undefinedItem
          )}
        </>
      )}
    </button>
  );
};

export default SchemaItem;
