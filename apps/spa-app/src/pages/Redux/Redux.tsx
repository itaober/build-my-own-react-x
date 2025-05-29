import { useEffect, useState } from 'react';

import store, { actions, reducer } from './store';

const btnCls = 'bg-gray-200 px-2 py-1 rounded';

const Redux = () => {
  const [, update] = useState({});

  useEffect(() => {
    store.subscribe(() => update({}));
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <div>{JSON.stringify(store.getState())}</div>
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

      <button className={btnCls} onClick={() => store.replaceReducer(reducer)}>
        Replace reducer
      </button>
    </div>
  );
};

export default Redux;
