import { createContext, useContext } from 'react';

export const StoreContext = createContext<any>(null);

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('store not found. Make sure you wrapped with <Provider>.');
  }

  return store;
};
