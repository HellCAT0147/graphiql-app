import { describe, expect, test } from 'vitest';
import {
  filterTypes,
  getSchemaItems,
  getType,
  getTypeName,
} from '../schema-resolvers';
import { AllTypes } from '../../store/types';
import { InnerType, Schema, SchemaItem } from '../../components/types';

describe('Schema-resolvers tests', () => {
  test('Testing filterTypes function', () => {
    const mockQueryType: SchemaItem = { name: 'Query', description: null };
    const mockMutationType: SchemaItem = {
      name: 'Mutation',
      description: null,
    };
    const mockOtherType: SchemaItem = { name: 'OtherType', description: null };
    const mockAllTypes: AllTypes = {
      types: [mockQueryType, mockMutationType, mockOtherType],
      rootTypes: { query: mockQueryType, mutation: mockMutationType },
    };
    const result: SchemaItem[] = filterTypes(mockAllTypes);

    expect(result).toHaveLength(1);
    expect(result).toContainEqual(mockOtherType);
    expect(result).not.toContainEqual(mockQueryType);
    expect(result).not.toContainEqual(mockMutationType);
  });

  test('it should return the type name if it exists', () => {
    const mockType: InnerType = { name: 'MockType', ofType: null };
    const result: string = getTypeName(mockType);

    expect(result).toBe('MockType');
  });

  test('it should return the template phrase if the type name does not exist', () => {
    const mockType: InnerType = { name: null, ofType: null };
    const result: string = getTypeName(mockType, 'CustomTemplate');

    expect(result).toBe('CustomTemplate');
  });

  test('it should return the template phrase if the type depth exceeds the maximum depth', () => {
    const mockType: InnerType = {
      name: null,
      ofType: {
        name: null,
        ofType: {
          name: null,
          ofType: {
            name: null,
            ofType: {
              name: null,
              ofType: {
                name: null,
                ofType: {
                  name: null,
                  ofType: null,
                },
              },
            },
          },
        },
      },
    };
    const result: string = getTypeName(mockType, 'CustomTemplate');

    expect(result).toBe('CustomTemplate');
  });

  test('it should return the SchemaItem corresponding to the provided type name', () => {
    const mockType: InnerType = { name: 'MockType', ofType: null };
    const mockAllTypes: AllTypes = {
      types: [{ name: 'MockType', description: null }],
      rootTypes: { query: null, mutation: null },
    };
    const result: SchemaItem | undefined = getType(mockType, mockAllTypes);

    expect(result?.name).toBe('MockType');
  });

  test('it should return undefined if the provided type name does not exist', () => {
    const mockType: InnerType = { name: 'NonExistentType', ofType: null };
    const mockAllTypes: AllTypes = {
      types: [{ name: 'MockType', description: null }],
      rootTypes: { query: null, mutation: null },
    };
    const result: SchemaItem | undefined = getType(mockType, mockAllTypes);

    expect(result).toBeUndefined();
  });

  test('it should return the SchemaItem corresponding to the provided string type name', () => {
    const mockAllTypes: AllTypes = {
      types: [{ name: 'MockType', description: null }],
      rootTypes: { query: null, mutation: null },
    };
    const result: SchemaItem | undefined = getType('MockType', mockAllTypes);

    expect(result?.name).toBe('MockType');
  });

  test('it should return undefined if the provided string type name does not exist', () => {
    const mockAllTypes: AllTypes = {
      types: [{ name: 'MockType', description: null }],
      rootTypes: { query: null, mutation: null },
    };
    const result: SchemaItem | undefined = getType(
      'NonExistentType',
      mockAllTypes
    );

    expect(result).toBeUndefined();
  });

  test('it should return AllTypes with filtered types and root types', () => {
    const mockSchema: Schema = {
      data: {
        __schema: {
          types: [
            { name: 'Type1', description: null },
            { name: '__Type2', description: null },
            { name: 'Type3', description: null },
          ],
          queryType: { name: 'QueryType', description: null },
          mutationType: { name: 'MutationType', description: null },
        },
      },
    };
    const result: AllTypes = getSchemaItems(mockSchema);

    expect(result.types).toHaveLength(2);
    expect(result.rootTypes.query?.name).toBe('QueryType');
    expect(result.rootTypes.mutation?.name).toBe('MutationType');
  });

  test('it should handle schema with no types', () => {
    const mockSchema: Schema = {
      data: {
        __schema: {
          types: [],
          queryType: { name: 'QueryType', description: null },
          mutationType: { name: 'MutationType', description: null },
        },
      },
    };

    const result: AllTypes = getSchemaItems(mockSchema);

    expect(result.types).toHaveLength(0);
    expect(result.rootTypes.query?.name).toBe('QueryType');
    expect(result.rootTypes.mutation?.name).toBe('MutationType');
  });
});
