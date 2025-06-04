export interface Store<State> {
  state: State;
  listeners: Set<() => void>;
  subscribe: (listener: () => void) => () => void;
  setState: (fn: (state: State) => State) => void;
  getSnapshot: () => State;
}
