// src/store/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  overdue: [],
  dueToday: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addOverdueNotification: (state, action) => {
      state.overdue.push(action.payload);
    },
    removeOverdueNotification: (state, action) => {
      state.overdue = state.overdue.filter((id) => id !== action.payload);
    },
    addDueTodayNotification: (state, action) => {
      state.dueToday.push(action.payload);
    },
    removeDueTodayNotification: (state, action) => {
      state.dueToday = state.dueToday.filter((id) => id !== action.payload);
    },
  },
});

export const {
  addOverdueNotification,
  removeOverdueNotification,
  addDueTodayNotification,
  removeDueTodayNotification,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;
