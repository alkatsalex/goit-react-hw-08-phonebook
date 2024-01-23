import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContact,
  getContactsThunk,
  postNewContact,
} from 'store/operetions';

const initialState = {
  items: [],
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(postNewContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload.id);
      });
  },
});

export const contactReducer = ContactSlice.reducer;
