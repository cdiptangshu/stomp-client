import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import connectionReducer from './connection-slice';
import listener from './listener';
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
  middleware: [listener, thunk],
  devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
