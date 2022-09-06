import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
   
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logOut = createAsyncThunk('logOut', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const refreshUser = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {

    return thunkAPI.rejectWithValue()
  }

  token.set(persistedToken);
  try {

    const {data} = await axios.get('/users/current');
    return data
  } catch (error) {
    console.log(error)
  }
});

export { register, logIn, logOut, refreshUser };
