import { createSlice } from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connected: false
  },
  reducers: {
    connect: (state) => {
      state.connected = true;
    },
    disconnect: (state) => {
      state.connected = false;
    }
  }
});

export const { connect, disconnect } = connectionSlice.actions;

export default connectionSlice.reducer;
