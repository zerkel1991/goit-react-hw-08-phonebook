import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducers';
import { contactsApi } from './contactsApi';
import authReducer from './auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export { store };
