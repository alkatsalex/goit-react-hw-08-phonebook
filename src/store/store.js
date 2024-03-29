import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { loadingReduser } from './loading/loadingSlice';
import { registeReduser } from './registration/registrationSlice';

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
//

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
