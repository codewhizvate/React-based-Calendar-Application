// src/store/companiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.push(action.payload);
    },
    editCompany: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex((company) => company.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
      }
    },
    deleteCompany: (state, action) => {
      return state.filter((company) => company.id !== action.payload);
    },
  },
});

export const { addCompany, editCompany, deleteCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
