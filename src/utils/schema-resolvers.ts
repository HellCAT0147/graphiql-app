import { InnerType, Schema, SchemaItem } from '../components/types';
import { AllTypes } from '../store/types';

export function getSchemaItems(data: Schema): AllTypes {
  const types: SchemaItem[] = [];
  data.data.__schema.types.forEach((type) => {
    if (!type.name.includes('__')) types.push(type);
  });
  return {
    types,
    rootTypes: {
      query: data.data.__schema.queryType,
      mutation: data.data.__schema.mutationType,
    },
  };
}

export function getType(
  innerType: InnerType | string,
  data: AllTypes
): SchemaItem | undefined {
  const typeName: string =
    typeof innerType === 'string' ? innerType : getTypeName(innerType);
  const type: SchemaItem | undefined = data.types.find(
    (type) => type.name === typeName
  );
  return type;
}

export function getTypeName(
  type: InnerType,
  templatePhrase: string = 'null'
): string {
  const maxDepth = 7;
  let currentDepth = 0;
  if (type.name) return type.name;
  else if (currentDepth++ < maxDepth && type.ofType)
    return getTypeName(type.ofType, templatePhrase);
  return templatePhrase;
}

export function filterTypes(data: AllTypes): SchemaItem[] {
  return data.types.filter(
    (type) =>
      type.name !== data.rootTypes.query?.name &&
      type.name !== data.rootTypes.mutation?.name
  );
}
