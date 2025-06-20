import { useEffect, useRef } from 'react';

import { useUnmount } from './useUnmount';
import { isBrowser } from './utils';

export interface IUseTitleOptions {
  restoreOnUnmount?: boolean;
  manual?: boolean;
}

const DEFAULT_OPTIONS: IUseTitleOptions = {
  restoreOnUnmount: false,
  manual: false,
};

export const useTitle = (title: string, options: IUseTitleOptions = DEFAULT_OPTIONS) => {
  const prevTitleRef = useRef(isBrowser ? document.title : '');

  useEffect(() => {
    if (!options?.manual) {
      document.title = title;
    }
  }, [title, options?.manual]);

  useUnmount(() => {
    if (options?.restoreOnUnmount) {
      document.title = prevTitleRef.current;
    }
  });
};
