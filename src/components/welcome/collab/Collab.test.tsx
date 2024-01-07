import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../../mocks';
import Collab from '.';

describe('Tests for the Collab', (): void => {
  test('Showing english words drawn correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <Collab />
        </Context.Provider>
      </Provider>
    );

    expect(
      screen.getByText(contextEn.lang.welcomeCollaborationTitle)
    ).toBeDefined();
    expect(
      screen.getByText(contextEn.lang.welcomeCollaborationDescription)
    ).toBeDefined();
  });
  test('Showing russian words drawn correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <Collab />
        </Context.Provider>
      </Provider>
    );

    expect(
      screen.getByText(contextRu.lang.welcomeCollaborationTitle)
    ).toBeDefined();
    expect(
      screen.getByText(contextRu.lang.welcomeCollaborationDescription)
    ).toBeDefined();
  });
});
