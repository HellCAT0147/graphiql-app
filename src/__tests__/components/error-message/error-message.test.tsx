import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../../../components/error-message';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import { Context } from '../../../contexts';
import { contextEn, contextRu } from '../../mocks';

describe('Tests for the ErrorMessage', (): void => {
  test('Should show correct ErrorMessage', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <ErrorMessage message={'Test error-message'} />
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(/Test error-message/i)).toBeDefined();
  });
  test('Should use current language', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextRu}>
          <ErrorMessage message={''} />
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(/Ой!/i)).toBeDefined();

    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <ErrorMessage message={''} />
        </Context.Provider>
      </Provider>
    );

    expect(screen.getByText(/Oops!/i)).toBeDefined();
  });
});
