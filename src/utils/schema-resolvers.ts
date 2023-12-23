import { Schema, SchemaType } from '../components/types';
import { AllTypes } from '../store/types';

export function getSchemaTypes(data: Schema): AllTypes {
  const types: SchemaType[] = [];
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

export function typePreparer(
  type: SchemaType | { name: string } | null,
  templatePhrase: string
): SchemaType | string {
  if (type && 'fields' in type && type.fields) return type;
  else if (type && 'description' in type && type.description)
    return type.description;
  return templatePhrase;
}
