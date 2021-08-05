import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from "./phonebook-actions";
import axios from "axios";

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("http://localhost:4040/contacts", contact)
    .then((resp) => dispatch(addContactSuccess(resp.data)))
    .catch((err) => dispatch(addContactError(err)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((err) => dispatch(deleteContactError(err)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("http://localhost:4040/contacts")
    .then((resp) => dispatch(fetchContactsSuccess(resp.data)))
    .catch((er) => dispatch(fetchContactsError(er)));
};
