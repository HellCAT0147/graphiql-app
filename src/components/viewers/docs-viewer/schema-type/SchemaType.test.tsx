import { describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store.ts';
import { Context } from '../../../../contexts';
import { contextEn, contextRu } from '../../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import SchemaType from '.';

describe('Tests for SchemaType', (): void => {
  vi.mock('../../../../utils/schema-resolvers', () => {
    return {
      getType: vi.fn(() => {
        return true;
      }),
    };
  });
  test('Showing english words drawn correctly', async () => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <SchemaType
              data={{
                args: [
                  {
                    name: 'foo',
                    type: { name: 'bar', ofType: null },
                    description: 'foobar',
                  },
                ],
                name: 'vasya',
                type: { name: 'vasya', ofType: null },
                description: null,
              }}
            />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );
    expect(screen.getByText(contextEn.lang.typeHeader)).toBeDefined();
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <SchemaType
                data={{
                  args: [
                    {
                      name: 'foo',
                      type: { name: 'bar', ofType: null },
                      description: 'foobar',
                    },
                  ],
                  name: 'vasya',
                  type: { name: 'vasya', ofType: null },
                  description: null,
                }}
              />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText(contextRu.lang.typeHeader)).toBeDefined();
  });
});
