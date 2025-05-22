import { useEffect } from 'react';

import { useLatestRef } from './useLatestRef';

export const useUnmount = (fn: () => void) => {
  const fnRef = useLatestRef(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};
