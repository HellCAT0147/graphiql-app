import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';
import { Context } from '../../contexts';
import { contextEn } from '../../mocks';
import { MemoryRouter } from 'react-router-dom';
import ZodError from '.';
import { SafeParseError } from 'zod';
import { ZodError as ZZodError } from 'zod';

describe('Tests for ZodError', (): void => {
  test('It renders in loading', (): void => {
    const zzodError: ZZodError<string> = new ZZodError([
      {
        fatal: false,
        message: 'too bad',
        code: 'custom',
        path: [],
      },
    ]);
    const error: SafeParseError<string> = {
      success: false,
      error: zzodError,
    };

    render(
      <Provider store={store}>
        <Context.Provider value={contextEn}>
          <MemoryRouter>
            <ZodError safeParseError={error} />
          </MemoryRouter>
        </Context.Provider>
      </Provider>
    );
    expect(
      document.getElementsByClassName('text-danger').length
    ).toBeGreaterThan(0);
  });
});
