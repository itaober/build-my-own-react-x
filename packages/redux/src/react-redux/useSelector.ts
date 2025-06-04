import { useSyncExternalStore } from 'react';

import { useStore } from './storeContext';

export const useSelector = <T>(selector: (state: any) => T): T => {
  const store = useStore();

  const subscribe = store.subscribe;
  const getSnapshot = () => selector(store.getState());

  return useSyncExternalStore(subscribe, getSnapshot);
};
