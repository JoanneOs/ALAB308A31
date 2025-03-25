import { central, db1, db2, db3, vault } from './databases.js';


const dbs = { db1, db2, db3 };

async function getUserData(id) {
  try {
    const [db, user] = await Promise.all([central(id), vault(id)]);
    return { id, ...user, ...await dbs[db](id) };
  } catch (e) {
    throw Error(`Failed: ${e.message}`);
  }
}

// Test it
getUserData(3).then(console.log).catch(console.error);
getUserData(99).then(console.log).catch(console.error); // Will fail