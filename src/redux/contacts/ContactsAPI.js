import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contactData, { rejectWithValue, dispatch }) {
    try {
      const { data } = await axios.post('/contacts', contactData);
      dispatch(fetchContacts())
      return data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, {thunkAPI,dispatch}) => {
    try {
      await axios.delete(`/contacts/${id}`);
      dispatch(fetchContacts())
      return id;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const Contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addContacts.rejected]: (state, action) => {
      state.contacts.contacts = [...state,...action.payload]
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default Contacts.reducer;
