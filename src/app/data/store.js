import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import connectionReducer from './slices/connectionSlice';
import subscriptionReducer from './slices/subscriptionSlice';

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
  reducer: persistedReducer
});

export const persistor = persistStore(store);
