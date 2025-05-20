import { renderHook } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';

import { useUnmount } from '../useUnmount';

describe('useUnmount', () => {
  it('useUnmount should work', () => {
    const fn = vitest.fn();
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});
