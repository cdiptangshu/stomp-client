import { createSlice } from '@reduxjs/toolkit';

const responsesSlice = createSlice({
  name: 'responses',
  initialState: {
    messages: []
  },
  reducers: {
    log: (state, action) => {
      const { headers, body } = action.payload;
      state.messages.push({ headers, body, timestamp: Date.now() });
    },
    clear: (state) => {
      state.messages = [];
    }
  }
});

export const { log, clear } = responsesSlice.actions;

export default responsesSlice.reducer;
