import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import QueryEditor from '.';

describe('Tests for QueryEditor', (): void => {
  test('Renders in English correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <QueryEditor />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.queryEditorTitle)).toBeDefined();
  });
  test('Renders in Russian correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <MemoryRouter>
            <QueryEditor />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextRu.lang.queryEditorTitle)).toBeDefined();
  });
});
