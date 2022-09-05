import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducers';
import { contactsApi } from './contactsApi';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export { store };
