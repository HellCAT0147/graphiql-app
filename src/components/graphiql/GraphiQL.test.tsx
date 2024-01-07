import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn, contextRu } from '../../mocks';
import { MemoryRouter } from 'react-router-dom';
import GraphiQl from './GraphiQl.tsx';

describe('Tests for GraphiQL', (): void => {
  test('It renders in English', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <GraphiQl />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.setApi)).toBeDefined();
  });
  test('It renders in Russian', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <MemoryRouter>
            <GraphiQl />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextRu.lang.setApi)).toBeDefined();
  });
});
