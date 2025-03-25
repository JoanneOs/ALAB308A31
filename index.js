// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  return new Promise(async (resolve, reject) => {
    try {
      // Get database name and vault data in parallel
      const [dbName, vaultData] = await Promise.all([
        central(id),
        vault(id)
      ]);

      // Get basic user info from the correct database
      const basicInfo = await dbs[dbName](id);

      // Combine all data into one object
      const userData = {
        id,
        ...vaultData,
        ...basicInfo
      };

      resolve(userData);
    } catch (error) {
      reject(`Error fetching user data: ${error.message}`);
    }
  });
}

// Example usage:
getUserData(1)
  .then(data => console.log("User data:", data))
  .catch(error => console.error("Error:", error));

getUserData(99)
  .then(data => console.log("This won't print"))
  .catch(error => console.error("Expected error:", error));

  //The central() function threw this error because:
//The assignment only allows IDs 1-10


////verifying////
// Should SUCCESS
getUserData(5).then(console.log).catch(console.error); 

// Should FAIL
getUserData(0).then(console.log).catch(console.error);
getUserData("abc").then(console.log).catch(console.error);