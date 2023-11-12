import { createSlice } from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    state: 'disconnected',
    endpoint: '',
    headers: ''
  },
  reducers: {
    connect: (state, action) => {
      state.state = 'connected';
      state.endpoint = action.payload.endpoint;
      state.headers = action.payload.headers;
    },
    connected: (state) => {
      state.state = 'connected'
    },
    disconnect: (state) => {
      state.state = 'disconnected';
    }
  }
});

export const { connect, connected, disconnect } = connectionSlice.actions;

export default connectionSlice.reducer;
