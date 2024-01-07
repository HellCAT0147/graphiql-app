import { describe, expect, test } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import DocsViewer from '.';

describe('Tests for the DocsViewer', (): void => {
  test('Showing english words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <DocsViewer />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    const aside = document.getElementsByTagName('aside')[0];
    if (aside) {
      expect(aside.children.length).toEqual(1);
    }
  });
  test('Showing russian words drawn correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextRu}>
            <MemoryRouter>
              <DocsViewer />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    const aside = document.getElementsByTagName('aside')[0];
    if (aside) {
      expect(aside.children.length).toEqual(1);
    }
  });
});
