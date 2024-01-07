import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn, contextRu } from '../../mocks';
import { MemoryRouter } from 'react-router-dom';
import Editors from './Editors.tsx';

describe('Tests for Editors', (): void => {
  test('It renders in English', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <Editors />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.queryEditorTitle)).toBeDefined();
  });
  test('It renders in Russian', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <MemoryRouter>
            <Editors />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextRu.lang.queryEditorTitle)).toBeDefined();
  });
});
