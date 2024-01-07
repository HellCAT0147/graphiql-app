import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component tests', () => {
  test('It renders children when there is no error', () => {
    const { container } = render(
      <ErrorBoundary>
        <div>Children content</div>
      </ErrorBoundary>
    );

    expect(container.textContent).toContain('Children content');
  });
});
