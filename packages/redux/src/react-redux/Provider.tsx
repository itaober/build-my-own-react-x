import type { ReactNode } from 'react';

import { StoreContext } from './storeContext';

interface IProviderProps {
  store: any;
  children: ReactNode;
}

export const Provider = ({ store, children }: IProviderProps) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
