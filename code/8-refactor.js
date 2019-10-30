const http = require('http');
const querystring = require('querystring');
const url = require('url');

const mysqlInit = require('./db/mysql-init');

const routers = require('./routers');

function getBody(request) {
  return new Promise((resolve, reject) => {
    let body = [];
    request
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        resolve(body);
      });
  });
}

const server = http.createServer(async function(request, response) {
  // 1. 获取参数
  const method = request.method;
  const urlinfo = url.parse(request.url);
  request.urlinfo = urlinfo;
  if (method.toLowerCase() === 'get') {
    const qs = querystring.parse(urlinfo.query);
    request.qs = qs;
  } else if (method.toLocaleLowerCase() === 'post') {
    const bodyStr = await getBody(request);
    const contentType = request.headers['content-type'];
    let body = bodyStr;
    if (contentType === 'application/json') {
      body = JSON.parse(bodyStr);
    }
    request.body = body;
  }

  // 2. 执行逻辑
  const r = await routers.doSth(request, response);
  console.log('r: ', r);

  // 3. 响应结果
  let rstr = '';
  let contentType = 'text/html';
  if (typeof r === 'object') {
    rstr = JSON.stringify(r);
    contentType = 'application/json';
  } else {
    rstr = r.toString();
  }
  console.log('rstr: ', rstr, rstr.length);
  if (!response.statusCode) {
    response.statusCode = 200;
  }
  response.setHeader('Content-Type', contentType);
  // response.setHeader('Content-Length', rstr.length);
  response.end(rstr);
});

server.listen(7777);

console.log('Server running at http://127.0.0.1:7777/');
