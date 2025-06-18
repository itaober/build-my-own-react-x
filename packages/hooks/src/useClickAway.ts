import { useLatestRef } from './useLatestRef';
import type { BasicTarget } from './utils';
import { getDocumentOrShadow, getTargetElement, useEffectWithTarget } from './utils';

type DocumentEventKey = keyof DocumentEventMap;

export const useClickAway = <T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: BasicTarget | BasicTarget[],
  eventName: DocumentEventKey | DocumentEventKey[] = 'click',
) => {
  const onClickAwayRef = useLatestRef(onClickAway);

  useEffectWithTarget(
    () => {
      const handler = (event: any) => {
        const targets = Array.isArray(target) ? target : [target];
        if (
          targets.some(item => {
            const targetElement = getTargetElement(item);
            return !targetElement || targetElement.contains(event.target);
          })
        ) {
          return;
        }
        onClickAwayRef.current(event as T);
      };

      const documentOrShadow = getDocumentOrShadow(target);

      const eventNames = Array.isArray(eventName) ? eventName : [eventName];

      eventNames.forEach(eventName => {
        documentOrShadow.addEventListener(eventName, handler);
      });

      return () => {
        eventNames.forEach(eventName => {
          documentOrShadow.removeEventListener(eventName, handler);
        });
      };
    },
    Array.isArray(eventName) ? eventName : [eventName],
    target,
  );
};
