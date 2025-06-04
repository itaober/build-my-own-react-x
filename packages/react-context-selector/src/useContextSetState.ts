import type React from 'react';
import { useContext } from 'react';

import type { Store } from './types';

export const useContextSetState = <State>(Context: React.Context<Store<State> | null>) => {
  const store = useContext(Context);

  if (!store) {
    throw new Error('Context Provider is missing.');
  }

  return store.setState;
};
