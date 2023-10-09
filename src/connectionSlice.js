import { createSlice } from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connected: false,
    endpoint: '',
    headers: {}
  },
  reducers: {
    connect: (state, action) => {
      state.connected = true;
      state.endpoint = action.payload.endpoint;
      state.headers = action.payload.headers;
    },
    disconnect: (state) => {
      state.connected = false;
    }
  }
});

export const { connect, disconnect } = connectionSlice.actions;

export default connectionSlice.reducer;
