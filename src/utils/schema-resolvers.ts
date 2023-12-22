import { Schema, SchemaType } from '../components/types';

export const getSchemaTypes = (data: Schema): SchemaType[] => {
  const result: SchemaType[] = [];
  data.data.__schema.types.forEach((type) => {
    if (!type.name.includes('__')) result.push(type);
  });
  result.sort(sortFunction);
  return result;
};

function sortFunction(a: SchemaType, b: SchemaType): number {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
