// src/store/communicationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const communicationsSlice = createSlice({
  name: 'communications',
  initialState,
  reducers: {
    logCommunication: (state, action) => {
      state.push(action.payload);
    },
    updateCommunication: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex((comm) => comm.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
      }
    },
    deleteCommunication: (state, action) => {
      return state.filter((comm) => comm.id !== action.payload);
    },
  },
});

export const { logCommunication, updateCommunication, deleteCommunication } = communicationsSlice.actions;
export default communicationsSlice.reducer;
