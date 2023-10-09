import { createSlice } from '@reduxjs/toolkit';

const responsesSlice = createSlice({
  name: 'responses',
  initialState: {
    messages: []
  },
  reducers: {
    log: (state, action) => {
      const { topic, message } = action.payload;
      state.messages.push({ topic, message, timestamp: Date.now() });
    },
    clear: (state) => {
      state.messages = [];
    }
  }
});

export const { log, clear } = responsesSlice.actions;

export default responsesSlice.reducer;
