import path from 'path';

import * as fs from 'node:fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const updateContactList = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
