import { useMemo, useState } from 'react';

export interface IUseToggleActions<T> {
  set: (value: T) => void;
  toggle: () => void;
  setLeft: () => void;
  setRight: () => void;
}

function useToggle<T = boolean>(): [T, IUseToggleActions<T>];
function useToggle<T>(defaultValue: T): [T, IUseToggleActions<T>];
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, IUseToggleActions<T | U>];
function useToggle<D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue?: R,
): [D | R, IUseToggleActions<D | R>] {
  const [value, setValue] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const _reverseValue = (reverseValue ?? !defaultValue) as unknown as D | R;

    return {
      set: (value: D | R) => setValue(value),
      toggle: () => setValue(prev => (prev === defaultValue ? _reverseValue : defaultValue)),
      setLeft: () => setValue(defaultValue),
      setRight: () => setValue(_reverseValue),
    };
  }, []); // ignore value change

  return [value, actions];
}

export { useToggle };
