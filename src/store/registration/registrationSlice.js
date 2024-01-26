import { createSlice } from '@reduxjs/toolkit';
import {
  logInUser,
  registerUser,
  currentUser,
  logOutUser,
} from '../operetions';

const initialState = {
  token: '',
  profile: null,
};
// test
const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.profile = payload;
      })
      .addCase(currentUser.rejected, state => {
        state.profile = null;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.token = '';
        state.profile = null;
      });
  },
});

export const registeReduser = RegisterSlice.reducer;
