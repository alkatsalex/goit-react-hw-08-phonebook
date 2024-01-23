import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './ContactSlice/contactSlice.jsx';
import { filterReducer } from './filterSlice/filterSlice';
import { loadingReduser } from './Loading/loadingSlice';
import { registeReduser } from './Registration/registerSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'register',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, registeReduser);

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  loading: loadingReduser,
  register: persistedReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
