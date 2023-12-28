import {
  Schema,
  SchemaField,
  SchemaItem,
  SchemaType,
} from '../components/types';
import { AllTypes } from '../store/types';

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
    isSchemaItems(obj.data.__schema.types)
  )
    return true;
  return false;
}

export function isSchemaItems(obj: unknown): obj is SchemaItem[] {
  if (
    typeof obj === 'object' &&
    obj &&
    Array.isArray(obj) &&
    'name' in obj[0] &&
    'description' in obj[0]
  )
    return true;
  return false;
}

export function isType(obj: unknown): obj is SchemaType {
  if (
    typeof obj === 'object' &&
    obj &&
    'name' in obj &&
    'description' in obj &&
    'fields' in obj &&
    'inputFields' in obj
  )
    return true;
  return false;
}

export function isField(obj: unknown): obj is SchemaField {
  if (
    typeof obj === 'object' &&
    obj &&
    'name' in obj &&
    'description' in obj &&
    'type' in obj
  )
    return true;
  return false;
}

export function isAllTypes(obj: unknown): obj is AllTypes {
  if (typeof obj === 'object' && obj && 'types' in obj && 'rootTypes' in obj)
    return true;
  return false;
}
