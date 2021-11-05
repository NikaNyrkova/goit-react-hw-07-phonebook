import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import * as phonebookAPI from "../../services/phonebook-api";

axios.defaults.baseURL = "http://localhost:3000";

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  async (contact) => {
    const data = await phonebookAPI.addContact(contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (id) => {
    await phonebookAPI.deleteContact(id);
    return id;
  }
);

export const fetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async () => {
    const contacts = await phonebookAPI.fetchContacts();
    return contacts;
  }
);

// TRY CATCH
// export const addContact = (contact) => async (dispatch) => {
//   dispatch(addContactRequest());
//   try {
//     const data = await phonebookAPI.addContact(contact)
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error.message))
//   }
// };

// export const deleteContact = (id) => async (dispatch) => {
//   dispatch(deleteContactRequest());
//   try {
//     await phonebookAPI.deleteContact(id);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error.message))
//   }
// };

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const contacts = await phonebookAPI.fetchContacts();
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message))
//   }
// };
