import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const AuthHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (newUser, { rejectWithValue }) => {
    try {
      console.log('newUser :>> ', newUser);
      const { data } = await axios.post('/users/signup', newUser);
      console.log('singin', data);
      AuthHeader.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logInUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('userData :>> ', userData);
      const { data } = await axios.post('/users/login', userData);
      console.log('login', data);
      AuthHeader.set(data.token);
      console.log(axios.defaults.headers);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'user/contact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postNewContact = createAsyncThunk(
  'user/addcontact',
  async (object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', object);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'user/deletecontact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
