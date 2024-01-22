import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './ContactSlice/ContactSlice';
import { FilterReducer } from './filterSlice/filterSlice';
import { LoadingReduser } from './Loading/LoadingSlice';
import { RegisteReduser } from './Registration/RegisterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, RegisteReduser);

const reducer = combineReducers({
  contacts: ContactReducer,
  filter: FilterReducer,
  loading: LoadingReduser,
  register: persistedReducer,
});

export const store = configureStore({ reducer });

export const persistor = persistStore(store);
