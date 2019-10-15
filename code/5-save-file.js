const http = require("http");
const fs = require("fs");
const writeFilePromise = require("./fileutils").writeFilePromise;

const server = http.createServer(async function(request, response) {
  // 读参数
  const url = request.url;
  console.log(url);
  const fileName = url.slice(1);

  // 做业务逻辑

  let body = [];
  request
    .on("data", chunk => {
      console.log("=====chunk", chunk);
      body.push(chunk);
    })
    .on("end", async () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string

      try {
        const data = await writeFilePromise(fileName, body, "utf-8");
        // 响应结果
        response.end("文件保存成功");
      } catch (err) {
        console.log(err);
        response.end("文件不存在");
      }
    });
});

server.listen(7777);
console.log("Server running at http://127.0.0.1:7777/");
