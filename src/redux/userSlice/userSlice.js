import { createSlice } from '@reduxjs/toolkit';
import { getAuth, logOut, signIn, signUp } from './operations';

const initialState = {
  user: null,
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

    builder.addCase(getAuth.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.user = { user: action.payload };
      state.isLoading = false;
    });
    builder.addCase(getAuth.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });

    builder.addCase(logOut.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
