const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let counter = 0;

stream.on("data", (chunk) => {
  counter++;
  console.log(chunk);
});

stream.on("end", () => {
  console.log(`Total chunks received: ${counter}`);
});

stream.on("error", (err) => {
  console.error("An error occurred:", err);
});
