import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    topics: [
      { id: nanoid(), path: '/topic/0', enabled: true },
      { id: nanoid(), path: '/topic/1', enabled: false },
      { id: nanoid(), path: '/topic/2', enabled: true },
      { id: nanoid(), path: '/topic/3', enabled: true },
      { id: nanoid(), path: '/topic/4', enabled: false }
    ]
  },
  reducers: {
    add: (state, action) => {
      const topic = action.payload;
      topic.enabled = true;
      state.topics.push(topic);
    },
    remove: (state, action) => {
      const id = action.payload;
      state.topics = state.topics.filter((t) => t.id !== id);
    },
    subscribe: (state, action) => {
      const id = action.payload;
      const topic = state.topics.find((t) => t.id === id);
      topic.enabled = true;
    },
    unsubscribe: (state, action) => {
      const id = action.payload;
      const topic = state.topics.find((t) => t.id === id);
      topic.enabled = false;
    }
  }
});

export const { add, remove, subscribe, unsubscribe } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
