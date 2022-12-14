import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from '../../services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsRequest();

      return contacts;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const newContact = await addContactRequest(contact);

      return newContact;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const deletedContact = await deleteContactRequest(contactId); // {}

      return deletedContact.id;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
