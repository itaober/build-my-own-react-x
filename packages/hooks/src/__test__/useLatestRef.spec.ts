import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useLatestRef } from '../useLatestRef';

const setUp = (val: any) => renderHook(state => useLatestRef(state), { initialProps: val });

describe('useLatestRef', () => {
  it('useLatestRef with basic variable should work', async () => {
    const { result, rerender } = setUp(0);

    rerender(1);
    expect(result.current.current).toBe(1);

    rerender(2);
    expect(result.current.current).toBe(2);

    rerender(3);
    expect(result.current.current).toBe(3);
  });

  it('useLatestRef with reference variable should work', async () => {
    const val1 = {};
    const { result, rerender } = setUp(val1);

    expect(result.current.current).toBe(val1);

    const val2: any[] = [];
    rerender(val2);
    expect(result.current.current).toBe(val2);
  });
});
