import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';
import { userReducer } from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    contactsData: contactReducer,
    userData: userReducer,
  },
});

export default store;
