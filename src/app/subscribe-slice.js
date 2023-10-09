import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const subscribeSlice = createSlice({
  name: 'subscription',
  initialState: {
    topics: []
  },
  reducers: {
    add: (state) => {
      const topic = { id: nanoid(), path: '', subscribed: false };
      state.topics.push(topic);
    },
    remove: (state, action) => {
      const id = action.payload;
      state.topics = state.topics.filter((t) => t.id !== id);
    },
    subscribe: (state, action) => {
      const topic = action.payload;
      const index = state.topics.findIndex((t) => t.id === topic.id);
      state.topics[index] = topic;
    },
    unsubscribeAll: (state) => {
      state.topics.forEach((t) => (t.subscribed = false));
    }
  }
});

export const { add, remove, subscribe, unsubscribeAll } = subscribeSlice.actions;

export default subscribeSlice.reducer;
