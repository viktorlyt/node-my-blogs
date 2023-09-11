// const fs = require("fs");
import fs from "fs";

const readStream = fs.createReadStream("./1.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./2.txt");

// readStream.on("data", (chunk) => {
//   console.log("------- new chunk -----------");
//   console.log(chunk);

//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
