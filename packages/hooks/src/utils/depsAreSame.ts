import type { DependencyList } from 'react';

export const depsAreSame = (oleDeps: DependencyList, newDeps: DependencyList) => {
  if (oleDeps === newDeps) {
    return true;
  }
  for (let i = 0; i < oleDeps.length; i++) {
    if (!Object.is(oleDeps[i], newDeps[i])) {
      return false;
    }
  }
  return true;
};
