import type React from 'react';
import { useContext, useRef, useSyncExternalStore } from 'react';

import type { Store } from './types';

interface Options<Selected> {
  compare?: (prev: Selected, next: Selected) => boolean;
}

export const useContextSelector = <State, Selected>(
  Context: React.Context<Store<State> | null>,
  selector: (state: State) => Selected,
  options?: Options<Selected>,
) => {
  const store = useContext(Context);

  if (!store) {
    throw new Error('Context Provider is missing.');
  }

  const compare = options?.compare ?? Object.is;

  const prevSelectedStateRef = useRef<Selected | null>(null);

  const selectedState = useSyncExternalStore(
    store.subscribe,
    () => {
      const nextSelectedState = selector(store.getSnapshot());

      // First time render
      if (prevSelectedStateRef.current === null) {
        prevSelectedStateRef.current = nextSelectedState;
        return nextSelectedState;
      }

      const shouldUpdateState = !compare(prevSelectedStateRef.current, nextSelectedState);
      if (shouldUpdateState) {
        prevSelectedStateRef.current = nextSelectedState;
        return nextSelectedState;
      }

      return prevSelectedStateRef.current;
    },
    // Server shapshot, No need to compare here
    () => selector(store.getSnapshot()),
  );

  return selectedState;
};
