import { configureStore } from '@reduxjs/toolkit';

import connectionReducer from './connectionSlice';

export default configureStore({
  reducer: {
    connection: connectionReducer
  }
});
