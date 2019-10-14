const http = require("http");
const querystring = require("querystring");
const url = require("url");

const server = http.createServer(function(request, response) {
  // 从request中获取需要的信息
  const urlinfo = url.parse(request.url);
  console.log("=====method: ", request.method);
  console.log("=====content-type: ", request.headers["content-type"]);

  let body = [];
  request
    .on("data", chunk => {
      console.log("=====chunk", chunk);
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      console.log("====22222222====body", body);

      // const qs = querystring.parse(body);
      // const a = parseInt(qs.a);
      // const b = parseInt(qs.b);

      const bodyObj = JSON.parse(body);
      const a = bodyObj.a;
      const b = bodyObj.b;

      console.log("====a, b:", a, b);

      // 根据request中的信息执行业务逻辑
      let result = 0;
      if (urlinfo.pathname === "/add") {
        result = a + b;
      } else if (urlinfo.pathname === "/sub") {
        result = a - b;
      } else if (urlinfo.pathname === "/mul") {
        result = a * b;
      } else if (urlinfo.pathname === "/div") {
        result = a / b;
      } else {
        result = "not supported!";
      }
      console.log("result: ", result);
      // 将业务逻辑的执行结果作为响应返回
      response.end(result.toString());
    });
  console.log("====body", body);
});

server.listen(7777);

console.log("Server running at http://127.0.0.1:7777/");
