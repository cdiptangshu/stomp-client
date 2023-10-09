import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import connectionReducer from './connection-slice';
import disconnectionListener from './disconnection-listener';
import publishingReducer from './publishing-slice';
import responsesSlice from './responses-slice';
import subscriptionReducer from './subscription-slice';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  connection: connectionReducer,
  subscription: subscriptionReducer,
  publishing: publishingReducer,
  responses: responsesSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [disconnectionListener, thunk]
});

export const persistor = persistStore(store);
