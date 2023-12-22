import { Schema, SchemaType } from '../components/types';

export const getSchemaTypes = (data: Schema): SchemaType[] => {
  const result: SchemaType[] = [];

  data.data.__schema.types.forEach((type) => {
    if (!type.name.includes('__')) result.push(type);
  });

  return result;
};
