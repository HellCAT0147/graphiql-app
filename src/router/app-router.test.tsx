import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';
import { Context } from '../contexts';
import { contextEn, contextRu } from '../mocks';
import { AppRouter } from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Tests for App Router', (): void => {
  test('It renders in English', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <AppRouter></AppRouter>
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.welcomeLink)).toBeDefined();
  });
  test('It renders in Russian', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <MemoryRouter>
            <AppRouter></AppRouter>
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextRu.lang.welcomeLink)).toBeDefined();
  });
});
