import { createFakeContact } from '../utils/createFakeContact.js';

import { updateContactList } from '../constants/contacts.js';

import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts();
  const newContact = createFakeContact();
  contactList.push(newContact);
  await updateContactList(contactList);
};

addOneContact();
