//
// Fake database functions
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export async function central(id) {
  await wait(100);
  if (id < 1 || id > 10) throw Error("Invalid ID");
  return id <= 4 ? "db1" : id <= 7 ? "db2" : "db3";
}