import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  filterContacts,
  fetchContactsError,
    fetchContactsRequest,
  fetchContactsSuccess
} from "./phonebook-actions";


const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContactsSuccess]: (_, {payload}) => payload,
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsError]: () => false,
  [fetchContactsSuccess]: () => false,
});

export default combineReducers({
  phonebookContacts: contactsReducer,
  phonebookFilter: filterReducer,
  loading
});

