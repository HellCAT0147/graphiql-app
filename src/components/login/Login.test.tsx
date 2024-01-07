import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn, contextRu } from '../../mocks';
import Welcome from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '.';

describe('Tests for the Login', (): void => {
  test('Showing english words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Login />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText(contextEn.lang.loginButtonText)).toBeDefined();
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <Routes>
                <Route path={'/'} element={<Welcome />}></Route>
              </Routes>
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText(contextRu.lang.loginButtonText)).toBeDefined();
  });
});
