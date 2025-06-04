import { Provider, useDispatch, useSelector } from '@itaober/redux/react-redux';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import store, { actions, reducer } from './store';

const btnCls = 'bg-gray-200 px-2 py-1 rounded';

const PureRedux = () => {
  const [, update] = useState({});

  useEffect(() => {
    store.subscribe(() => update({}));
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>{JSON.stringify(store.getState())}</div>
      <button className={btnCls} onClick={() => store.replaceReducer(reducer)}>
        Replace reducer
      </button>
      <button className={btnCls} onClick={() => actions.increment()}>
        INCREMENT
      </button>
      <button className={btnCls} onClick={() => actions.decrement()}>
        DECREMENT
      </button>
      <button className={btnCls} onClick={() => actions.setName('Taober')}>
        SET_NAME
      </button>
      <button className={btnCls} onClick={() => actions.setAge(18)}>
        SET_AGE
      </button>
    </div>
  );
};

const ReactReduxIncrement = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  console.log('ReactReduxIncrement render: ', count);

  return (
    <Button variant="outline" onClick={() => dispatch({ type: 'INCREMENT', data: 1 })}>
      React Redux Increment: {count}
    </Button>
  );
};

const ReactReduxSetName = () => {
  const name = useSelector(state => state.info?.name);
  const dispatch = useDispatch();

  console.log('ReactReduxSetName render: ', name);

  return (
    <Button
      variant="outline"
      onClick={() => dispatch({ type: 'SET_NAME', data: Math.random().toString() })}
    >
      React Redux Set Name: {name}
    </Button>
  );
};

const Redux = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <PureRedux />
      <Separator />
      <Provider store={store}>
        <div className="flex flex-col gap-6">
          <ReactReduxIncrement />
          <Separator />
          <ReactReduxSetName />
        </div>
      </Provider>
    </div>
  );
};

export default Redux;
