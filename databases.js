//
// Fake database functions
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export async function central(id) {
  await wait(100);
  if (id < 1 || id > 10) throw Error("Invalid ID");
  return id <= 4 ? "db1" : id <= 7 ? "db2" : "db3";
}

async function fakeFetch(data) {
    await wait(100);
    return data;
  }

  export const db1 = id => fakeFetch({username: `user${id}`, website: `user${id}.com`});
export const db2 = id => fakeFetch({username: `user${id}`, website: `user${id}.com`});
export const db3 = id => fakeFetch({username: `user${id}`, website: `user${id}.com`});
export const vault = id => fakeFetch({name: `User ${id}`, email: `user${id}@test.com`});