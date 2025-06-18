import type { DependencyList, EffectCallback, useLayoutEffect } from 'react';
import { useEffect, useRef } from 'react';

import { useUnmount } from '../useUnmount';
import { depsAreSame } from './depsAreSame';
import type { BasicTarget } from './domTarget';
import { getTargetElement } from './domTarget';

export const createEffectWithTarget = (
  useEffectType: typeof useEffect | typeof useLayoutEffect,
) => {
  const useEffectWithTarget = (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[],
  ) => {
    const hasInitRef = useRef(false);

    const lastElesRef = useRef<(Element | null)[]>([]);
    const lastDepsRef = useRef<DependencyList>([]);

    const unLoadRef = useRef<any>(null);

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target];
      const els = targets.map(item => getTargetElement(item));

      if (!hasInitRef.current) {
        hasInitRef.current = true;

        lastElesRef.current = els;
        lastDepsRef.current = deps;

        unLoadRef.current = effect();
        return;
      }

      if (
        els.length !== lastElesRef.current.length ||
        !depsAreSame(lastElesRef.current, els) ||
        !depsAreSame(lastDepsRef.current, deps)
      ) {
        unLoadRef.current();

        lastElesRef.current = els;
        lastDepsRef.current = deps;

        unLoadRef.current = effect();
      }
    });

    useUnmount(() => {
      unLoadRef.current();
      hasInitRef.current = false;
    });
  };

  return useEffectWithTarget;
};

export const useEffectWithTarget = createEffectWithTarget(useEffect);
