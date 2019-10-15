const fs = require("fs");

function readFilePromise(fileName, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function writeFilePromise(fileName, data, encoding) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, encoding, err => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

async function f() {
  try {
    const data = await readFilePromise("./data.txt", "utf-8");
    console.log(data);

    await writeFilePromise("./data2.txt", data, "utf-8");
  } catch (err) {
    console.error("=====", err);
  }
}

// f();

exports.readFilePromise = readFilePromise;
exports.writeFilePromise = writeFilePromise;
