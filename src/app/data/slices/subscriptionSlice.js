import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    topics: []
  },
  reducers: {
    add: (state) => {
      const topic = { id: nanoid(), path: '', enabled: false };
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
    }
  }
});

export const { add, remove, subscribe, unsubscribe } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
