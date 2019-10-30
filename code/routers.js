const cal = require('./cal');
const users = require('./controllers/users');

function doSth(request, response) {
  const urlinfo = request.urlinfo;
  let result = 0;

  const map = {
    '/add': cal.add,
    '/sub': cal.sub,
    '/mul': cal.mul,
    '/div': cal.div,

    '/register': users.register,
    '/login': users.login,
  };

  const fn = map[urlinfo.pathname];
  if (!fn) {
    result = 'not supported!';
  } else {
    result = fn(request, response);
  }

  return result;
}

exports.doSth = doSth;
