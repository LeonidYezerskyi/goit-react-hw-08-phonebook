import { createAsyncThunk } from '@reduxjs/toolkit';
// import localStorage from 'redux-persist/es/storage';
import { signInRequest, signUpRequest } from 'services/api';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, thunkApi) => {
    try {
      const userData = await signUpRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);
      return userData;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (formData, thunkApi) => {
    try {
      const userData = await signInRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);

      return userData;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
