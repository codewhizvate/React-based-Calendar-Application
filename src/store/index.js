// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companiesSlice';
import communicationsReducer from './communicationsSlice';
import notificationsReducer from './notificationsSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    communications: communicationsReducer,
    notifications: notificationsReducer,
  },
});

export default store;
