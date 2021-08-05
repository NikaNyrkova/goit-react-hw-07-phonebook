import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook-addRequest")
export const addContactSuccess = createAction("phonebook-addSuccess")
export const addContactError = createAction("phonebook-addError")


export const deleteContactRequest = createAction("phonebook-deleteRequest");
export const deleteContactSuccess = createAction("phonebook-deleteSuccess");
export const deleteContactError = createAction("phonebook-deleteError");

export const fetchContactsRequest = createAction("phonebook-fetchRequest");
export const fetchContactsSuccess = createAction("phonebook-fetchSuccess");
export const fetchContactsError = createAction("phonebook-fetchError");

export const filterContacts = createAction("phonebook-filter");



