import {
  Schema,
  SchemaField,
  SchemaItem,
  SchemaType,
} from '../components/types';
import { AllTypes, ErrorData } from '../store/types';

export function isError(obj: unknown): obj is Error {
  return obj instanceof Error;
}

export function isSchema(obj: unknown): obj is Schema {
  return !!(
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
  );
}

export function isSchemaItems(obj: unknown): obj is SchemaItem[] {
  return !!(
    typeof obj === 'object' &&
    obj &&
    Array.isArray(obj) &&
    'name' in obj[0] &&
    'description' in obj[0]
  );
}

export function isType(obj: unknown): obj is SchemaType {
  return !!(
    typeof obj === 'object' &&
    obj &&
    'name' in obj &&
    'description' in obj &&
    'fields' in obj &&
    'inputFields' in obj
  );
}

export function isField(obj: unknown): obj is SchemaField {
  return !!(
    typeof obj === 'object' &&
    obj &&
    'name' in obj &&
    'description' in obj &&
    'type' in obj
  );
}

export function isAllTypes(obj: unknown): obj is AllTypes {
  return !!(
    typeof obj === 'object' &&
    obj &&
    'types' in obj &&
    'rootTypes' in obj
  );
}

export function isErrorData(obj: unknown): obj is ErrorData {
  return !!(typeof obj === 'object' && obj && 'data' in obj);
}
