import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactId = action.payload;

        state.contacts.items = state.contacts.items.filter(
          item => item.id !== contactId
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
  },
});

export const { filterContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
