import React, { createContext } from 'react';

import type { Store } from './types';

export const createSelectContext = <State,>(initailState: State) => {
  const store: Store<State> = {
    state: initailState,
    listeners: new Set<() => void>(),
    subscribe: listener => {
      store.listeners.add(listener);
      return () => {
        store.listeners.delete(listener);
      };
    },
    setState: fn => {
      const newState = fn(store.state);
      store.state = newState;
      store.listeners.forEach(listener => listener());
    },
    getSnapshot: () => store.state,
  };

  const Context = createContext<Store<State> | null>(store);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <Context.Provider value={store}>{children}</Context.Provider>;
  };

  return [Context, Provider] as const;
};
