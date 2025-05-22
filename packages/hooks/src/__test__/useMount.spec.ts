import { renderHook } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';

import { useMount } from '../useMount';

describe('useMount', () => {
  it('test mount', async () => {
    const fn = vitest.fn();
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);

    renderHook(() => useMount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
