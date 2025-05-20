import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useTitle } from '../useTitle';

describe('useTitle', () => {
  it('should update document title', () => {
    const hook = renderHook(props => useTitle(props), { initialProps: 'Current Page Title' });

    expect(document.title).toBe('Current Page Title');
    act(() => {
      hook.rerender('Other Page Title');
    });
    expect(document.title).toBe('Other Page Title');
  });

  it('should restore document title on unmount', () => {
    document.title = 'Old Title';

    const hook = renderHook(props => useTitle(props, { restoreOnUnmount: true }), {
      initialProps: 'Current Page Title',
    });

    expect(document.title).toBe('Current Page Title');

    hook.unmount();
    expect(document.title).toBe('Old Title');
  });

  it('should not restore document title on unmount', () => {
    document.title = 'Old Title';

    const hook = renderHook(props => useTitle(props, { restoreOnUnmount: false }), {
      initialProps: 'Current Page Title',
    });

    expect(document.title).toBe('Current Page Title');

    hook.unmount();
    expect(document.title).toBe('Current Page Title');
  });

  it('should not update document title when manual is true', () => {
    document.title = 'Initial Title';

    const hook = renderHook(props => useTitle(props, { manual: true }), {
      initialProps: 'New Title',
    });

    expect(document.title).toBe('Initial Title');

    act(() => {
      hook.rerender('Another Title');
    });

    expect(document.title).toBe('Initial Title');
  });
});
