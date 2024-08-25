import { getAllContacts } from './getAllContacts.js';

import { updateContactList } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await updateContactList(contactList);
};

removeLastContact();
