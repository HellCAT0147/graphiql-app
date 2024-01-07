import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store.ts';
import { Context } from '../../../../contexts';
import { contextEn } from '../../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import Button from '.';

describe('Tests for Button', (): void => {
  test('Showing loader button correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Button isLoading={true} isError={false} />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    expect(screen.getByText('Loading...')).toBeDefined();
  });
  test('Showing error button correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Button isLoading={false} isError={true} />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    const button = document.getElementsByTagName('button')[0];
    if (button) {
      expect(button.className).toContain('btn-danger');
    }
  });
  test('Showing info button correctly', async () => {
    await waitFor(() =>
      render(
        <Provider store={store}>
          <Context.Provider value={contextEn}>
            <MemoryRouter>
              <Button isLoading={false} isError={false} />
            </MemoryRouter>
          </Context.Provider>
        </Provider>
      )
    );
    const button = document.getElementsByTagName('button')[0];
    if (button) {
      expect(button.className).toContain('btn-info');
    }
  });
});
