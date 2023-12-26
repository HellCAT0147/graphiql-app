import { InnerType, Schema, SchemaItem } from '../components/types';
import { AllTypes, DocsPage } from '../store/types';
import { isAllTypes } from './typeguards';

export function getSchemaItems(data: Schema): AllTypes {
  const types: SchemaItem[] = [];
  data.data.__schema.types.forEach((type) => {
    if (
      !type.name.includes('__') &&
      type.name !== data.data.__schema?.queryType?.name &&
      type.name !== data.data.__schema?.mutationType?.name
    )
      types.push(type);
  });
  return {
    types,
    rootTypes: {
      query: data.data.__schema.queryType,
      mutation: data.data.__schema.mutationType,
    },
  };
}

export function dataPreparer(
  data: DocsPage | { name: string },
  templatePhrase: string
): DocsPage {
  if (isAllTypes(data)) return data;
  if (typeof data === 'string' || (data && 'fields' in data && data.fields))
    return data;
  if (data && 'description' in data && data.description)
    return data.description;
  return templatePhrase;
}

export function getTypeName(type: InnerType, templatePhrase: string): string {
  const maxDepth = 7;
  let currentDepth = 0;
  if (type.name) return type.name;
  else if (currentDepth++ < maxDepth && type.ofType)
    return getTypeName(type.ofType, templatePhrase);
  return templatePhrase;
}
