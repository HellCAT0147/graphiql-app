import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../../mocks';
import BioList from '.';
import { members } from '../../../constants';

describe('Tests for the BioList', (): void => {
  test('Showing english words drawn correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <BioList />
        </Context.Provider>
      </Provider>
    );

    expect(
      screen.getAllByText(contextEn.lang.welcomeBioContributionsTitle).length
    ).toBe(members.length);
    expect(
      screen.getAllByText(contextEn.lang.welcomeBioAboutTitle).length
    ).toBe(members.length);
  });
  test('Showing russian words drawn correctly', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <BioList />
        </Context.Provider>
      </Provider>
    );

    expect(
      screen.getAllByText(contextRu.lang.welcomeBioContributionsTitle).length
    ).toBe(members.length);
    expect(
      screen.getAllByText(contextRu.lang.welcomeBioAboutTitle).length
    ).toBe(members.length);
  });
});
