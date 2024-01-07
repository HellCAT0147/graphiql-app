import { describe, expect, test } from 'vitest';
import { getOperationName, searchOperationName } from '../prettify';

describe('Testing getOperationName function', () => {
  test('it should return the correct operation name', () => {
    const mockQuery = `
      query GetUser {
        user {
          id
          name
        }
      }
    `;
    const result = getOperationName(mockQuery);

    expect(result).toBe('GetUser');
  });

  test('it should return an empty string for a query without an operation name', () => {
    const mockQueryWithoutOperationName = `
      {
        user {
          id
          name
        }
      }
    `;
    const result = getOperationName(mockQueryWithoutOperationName);

    expect(result).toBe('');
  });
});

describe('Testing searchOperationName function', () => {
  test('it should return the correct operation name', () => {
    const mockQuery = `
      query GetUser {
        user {
          id
          name
        }
      }
    `;
    const result = searchOperationName(mockQuery);

    expect(result).toBe('');
  });

  test('it should return an empty string for a query without an operation name', () => {
    const mockQueryWithoutOperationName = `
      {
        user {
          id
          name
        }
      }
    `;
    const result = searchOperationName(mockQueryWithoutOperationName);

    expect(result).toBe('');
  });

  test('it should return an empty string for a query with invalid brackets', () => {
    const mockQueryWithInvalidBrackets = `
      query GetUser {
        user {
          id
          name
      }
    `;
    const result = searchOperationName(mockQueryWithInvalidBrackets);

    expect(result).toBe('');
  });
});
