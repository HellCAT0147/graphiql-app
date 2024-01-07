import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn, contextRu } from '../../mocks';
import { MemoryRouter } from 'react-router-dom';
import Reset from '.';

describe('Tests for the Reset', (): void => {
  test('Showing english words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Reset />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText(contextEn.lang.resetButtonText)).toBeDefined();
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <Reset />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText(contextRu.lang.resetButtonText)).toBeDefined();
  });
});
