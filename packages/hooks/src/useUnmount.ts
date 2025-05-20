import { useEffect } from 'react';

import { useLatestRef } from './useLatestRef';

export const useUnmount = (fn: VoidFunction) => {
  const fnRef = useLatestRef(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};
