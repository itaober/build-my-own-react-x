import {
  createSelectContext,
  useContextSelector,
  useContextSetState,
} from '@itaober/react-context-selector';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const [Context, Provider] = createSelectContext({
  count: 0,
  info: {
    name: 'itaober',
    age: 26,
  },
});

const Increment = () => {
  const count = useContextSelector(Context, state => state.count);
  const setState = useContextSetState(Context);

  console.log('Increment render: ', count);

  return (
    <Button
      variant="outline"
      onClick={() =>
        setState(state => ({
          ...state,
          count: state.count + 1,
        }))
      }
    >
      Increment: {count}
    </Button>
  );
};

const SetName = () => {
  const name = useContextSelector(Context, state => state.info.name);
  const setState = useContextSetState(Context);

  console.log('SetName render: ', name);

  return (
    <Button
      variant="outline"
      onClick={() =>
        setState(state => ({ ...state, info: { ...state.info, name: Math.random().toString() } }))
      }
    >
      Set Name: {name}
    </Button>
  );
};

const ReactContextSelector = () => {
  return (
    <Provider>
      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <Increment />
        <Separator />
        <SetName />
      </div>
    </Provider>
  );
};

export default ReactContextSelector;
