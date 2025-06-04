import { useStore } from './storeContext';

export const useDispatch = () => {
  const store = useStore();

  return store.dispatch;
};
