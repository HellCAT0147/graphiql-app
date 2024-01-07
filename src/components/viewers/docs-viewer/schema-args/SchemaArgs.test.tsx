import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store.ts';
import { Context } from '../../../../contexts';
import { contextEn, contextRu } from '../../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import SchemaArgs from '.';

describe('Tests for Back', (): void => {
  test('Showing english words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <SchemaArgs
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
    expect(screen.getByText(contextEn.lang.argsHeader)).toBeDefined();
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <SchemaArgs
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
    expect(screen.getByText(contextRu.lang.argsHeader)).toBeDefined();
  });
});
