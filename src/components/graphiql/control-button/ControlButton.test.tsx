import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.ts';
import { Context } from '../../../contexts';
import { contextEn } from '../../../mocks';
import { MemoryRouter } from 'react-router-dom';
import ControlButton from './index.ts';

describe('Tests for ControlButton', (): void => {
  test('It renders in loading', (): void => {
    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <ControlButton
              atr={{
                isLoadingData: true,
                className: 'secondary mb-3',
                onClick: () => {},
                classIcon: 'fa-caret-right px-1 fs-2',
              }}
            />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeDefined();
  });
});
