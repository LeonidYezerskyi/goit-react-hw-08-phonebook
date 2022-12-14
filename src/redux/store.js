import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { userReducer } from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    userData: userReducer,
  },
});

export default store;
