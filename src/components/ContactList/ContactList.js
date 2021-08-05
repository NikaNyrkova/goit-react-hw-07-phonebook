import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/phonebook/phonebook-operations";

import st from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, deleteContacts, onFetchContacts }) => {
  useEffect(() => {
    onFetchContacts()
  }, [onFetchContacts])
  return (
    <ul className={st.list}>
      <ContactListItem contacts={contacts} deleteContact={deleteContacts} />
    </ul>
  );
};

const getVisibleContact = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

const mapStateToProps = (state) => {
  const { phonebookContacts, phonebookFilter } = state;
  const visibleContacts = getVisibleContact(phonebookContacts, phonebookFilter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteContacts: (id) => dispatch(deleteContact(id)),
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
