const { getUserByNameFromDB, addUserToDB } = require('../db/users');
function getUserByName(name) {
  // save file
  // api
  // logger
  // business logic
  // save db
  return getUserByNameFromDB(name);
}

function addUser(name, password) {
  // ....
  const dbR = addUserToDB(name, password);
  // logger.info(dbR)

  return dbR;
}

exports.addUser = addUser;
