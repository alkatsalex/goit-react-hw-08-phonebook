import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const initialState = {
  isLoading: false,
  error: null,
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const loadingReduser = LoadingSlice.reducer;
