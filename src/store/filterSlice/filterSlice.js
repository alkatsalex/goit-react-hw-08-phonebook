import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    chengeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const FilterReducer = FilterSlice.reducer;
export const { chengeFilter } = FilterSlice.actions;
