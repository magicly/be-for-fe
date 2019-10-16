const http = require("http");
const https = require("https");

// http.get("http://localhost:7777/data.txt", res => {
// https.get("https://www.runoob.com/nodejs/nodejs-fs.html", res => {
http.get("http://www.mmonly.cc/tag/br/", res => {
  let body = [];
  res
    .on("data", chunk => {
      // console.log("=====chunk", chunk);
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      const idx = body.indexOf('<div class="item_t">');
      console.log("idx: ", idx);
      let str = body.slice(idx);
      const idx2 = str.indexOf('src="');
      console.log("idx2: ", idx2);
      str = str.slice(idx2 + 5);
      const idx3 = str.indexOf(".jpg");
      console.log("idx3: ", idx3);
      const imgSrc = str.slice(0, idx3) + ".jpg";
      console.log(imgSrc);
    });
});
