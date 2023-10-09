import { createSlice } from '@reduxjs/toolkit';

export const publishingSlice = createSlice({
  name: 'publishing',
  initialState: {
    topic: '',
    message: {}
  },
  reducers: {
    send: (state, action) => {
      state.topic = action.payload.topic;
      state.message = action.payload.message;
    }
  }
});

export const { send } = publishingSlice.actions;

export default publishingSlice.reducer;
