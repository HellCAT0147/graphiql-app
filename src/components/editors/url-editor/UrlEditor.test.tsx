import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import UrlEditor from '.';
import { userEvent } from '@testing-library/user-event';

describe('Tests for UrlEditor', (): void => {
  test('Renders in English correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <UrlEditor />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextEn.lang.setApi)).toBeDefined();
  });
  test('Renders in Russian correctly and changes URL string', async () => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <MemoryRouter>
            <UrlEditor />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(contextRu.lang.setApi)).toBeDefined();

    const wrapper = (document.getElementById('set-url') as HTMLElement)
      .parentElement as HTMLElement;
    const input = wrapper.firstChild as HTMLInputElement;

    await userEvent.click(input);
    await userEvent.paste('vasya');
    expect(input.value).toEqual('vasya');

    await userEvent.click(document.getElementById('set-url') as HTMLElement);
    const state = store.getState();

    expect(state.options.url).toEqual('vasya');
  });
});
