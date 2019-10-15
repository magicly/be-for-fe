const http = require("http");
const https = require("https");

// http.get("http://localhost:7777/data.txt", res => {
https.get("https://www.runoob.com/nodejs/nodejs-fs.html", res => {
  let body = [];
  res
    .on("data", chunk => {
      // console.log("=====chunk", chunk);
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
});
