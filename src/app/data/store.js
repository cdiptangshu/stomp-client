import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import connectionListener from './connection-listener';
import connectionReducer from './connection-slice';
import subscriptionReducer from './subscription-slice';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  connection: connectionReducer,
  subscription: subscriptionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [connectionListener, thunk]
});

export const persistor = persistStore(store);
