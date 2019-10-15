const http = require("http");
const fs = require("fs");
const readFilePromise = require("./fileutils").readFilePromise;

const server = http.createServer(async function(request, response) {
  // 读参数
  const url = request.url;
  console.log(url);
  const fileName = url.slice(1);

  // 做业务逻辑
  try {
    const data = await readFilePromise(fileName, "utf-8");
    console.log(data);
    // 响应结果
    response.end(data);
  } catch (err) {
    console.log(err);
    response.end("文件不存在");
  }
});

server.listen(7777);
console.log("Server running at http://127.0.0.1:7777/");
