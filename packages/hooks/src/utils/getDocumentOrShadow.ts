import type { BasicTarget, TargetValue } from './domTarget';
import { getTargetElement } from './domTarget';

const checkIfAllInShadow = (target: BasicTarget[]) =>
  target.every(item => {
    const targetElement = getTargetElement<Element>(item);
    if (!targetElement) {
      return false;
    }
    if (targetElement.getRootNode() instanceof ShadowRoot) {
      return true;
    }
    return false;
  });

const getShadow = (node: TargetValue<Element>) => {
  if (!node) {
    return document;
  }
  return node.getRootNode();
};

export const getDocumentOrShadow = (target: BasicTarget | BasicTarget[]): Document | Node => {
  if (!target || !document.getRootNode) {
    return document;
  }

  const targets = Array.isArray(target) ? target : [target];

  if (checkIfAllInShadow(targets)) {
    return getShadow(getTargetElement(targets[0]));
  }
  return document;
};
