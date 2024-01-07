import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store.ts';
import { Context } from '../../../../contexts';
import { contextEn, contextRu } from '../../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import Back from '.';

describe('Tests for Back', (): void => {
  test('Showing english words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Back prevPageName={'vasya'} />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText('vasya')).toBeDefined();
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <Back prevPageName={'vasya'} />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText('vasya')).toBeDefined();
  });
});
