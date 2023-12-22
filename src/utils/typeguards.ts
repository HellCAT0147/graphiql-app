import { Schema, SchemaType } from '../components/types';

export function isError(obj: unknown): obj is Error {
  if (obj instanceof Error) return true;
  return false;
}

export function isSchema(obj: unknown): obj is Schema {
  if (
    typeof obj === 'object' &&
    obj &&
    'data' in obj &&
    typeof obj.data === 'object' &&
    obj.data &&
    '__schema' in obj.data &&
    typeof obj.data.__schema === 'object' &&
    obj.data.__schema &&
    'queryType' in obj.data.__schema &&
    'types' in obj.data.__schema &&
    typeof obj.data.__schema.queryType === 'object' &&
    typeof obj.data.__schema.types === 'object' &&
    obj.data.__schema.queryType &&
    obj.data.__schema.types &&
    isSchemaTypes(obj.data.__schema.types)
  )
    return true;
  return false;
}

function isSchemaTypes(obj: unknown): obj is SchemaType[] {
  if (
    typeof obj === 'object' &&
    obj &&
    Array.isArray(obj) &&
    'name' in obj[0] &&
    'description' in obj[0] &&
    'fields' in obj[0]
  )
    return true;
  return false;
}
