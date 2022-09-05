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
    console.log(data);
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

export { register, logIn, logOut };
