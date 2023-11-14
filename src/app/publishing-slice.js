import { createSlice } from '@reduxjs/toolkit';

export const publishingSlice = createSlice({
  name: 'publishing',
  initialState: {
    topic: '',
    message: '',
    headers: ''
  },
  reducers: {
    send: (state, action) => {
      state.topic = action.payload.topic;
      state.message = action.payload.message;
      state.headers = action.payload.headers;
    }
  }
});

export const { send } = publishingSlice.actions;

export default publishingSlice.reducer;
