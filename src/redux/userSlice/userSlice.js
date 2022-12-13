import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './operations';

const initialState = {
  user: { name: '', password: '' },
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',

  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
