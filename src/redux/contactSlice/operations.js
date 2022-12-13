import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteSelectedContact,
  getAllContacts,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await getAllContacts();
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const contacts = await addNewContact(contact);
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      await deleteSelectedContact(contactId);
      return contactId;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
