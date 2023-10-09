import { createListenerMiddleware } from '@reduxjs/toolkit';

import { disconnect } from './connection-slice';
import { unsubscribeAll } from './subscribe-slice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: disconnect,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(unsubscribeAll());
  }
});

export default listenerMiddleware.middleware;