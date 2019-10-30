const queryPromise = require('./dbutils').queryPromise;

function getUserByNameFromDB(name) {
  return queryPromise(`select * from users where name="${name}"`);
}

function addUserToDB(name, password) {
  return queryPromise(`insert into users(name, password) values("${name}", "${password}")`);
}

function getUsers() {
  return queryPromise(`select * from users`);
}

exports.getUserByNameFromDB = getUserByNameFromDB;
exports.addUserToDB = addUserToDB;
exports.getUsers = getUsers;
