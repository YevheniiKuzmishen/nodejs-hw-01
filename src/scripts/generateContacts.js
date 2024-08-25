import { updateContactList } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();

  const newContactList = Array(number).fill(0).map(createFakeContact);

  contactList.push(...newContactList);
  await updateContactList(contactList);
};

generateContacts(5);
