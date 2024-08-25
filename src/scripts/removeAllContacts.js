import { updateContactList } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  updateContactList([]);
};

removeAllContacts();
