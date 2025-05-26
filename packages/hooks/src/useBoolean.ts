import { useMemo } from 'react';

import { useToggle } from './useToggle';

export interface IUseBooleanActions {
  set: (value: boolean) => void;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export function useBoolean(defaultValue = false): [boolean, IUseBooleanActions] {
  const [state, { set, toggle }] = useToggle(!!defaultValue);

  const actions = useMemo(
    () => ({
      set: (v: boolean) => set(!!v),
      toggle,
      setTrue: () => set(true),
      setFalse: () => set(false),
    }),
    [],
  );

  return [state, actions];
}
