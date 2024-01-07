import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn, contextRu } from '../../mocks';
import Welcome from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Tests for the Welcome', (): void => {
  test('Showing english words drawn correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <Routes>
              <Route path={'/'} element={<Welcome />}></Route>
            </Routes>
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.welcomeTitle)).toBeDefined();
  });
  test('Showing russian words drawn correctly', (): void => {
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
    );

    expect(screen.getByText(contextRu.lang.welcomeTitle)).toBeDefined();
  });
});
