const fs = require("fs");

//reading
// fs.readFile("./133.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

//writing
// fs.writeFile("./1.txt", "Instaed of all...", () => {
//   console.log("file was written");
// });

//derectories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("folder deleted");
  });
}

//deleteing file
if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (err) => {
    if (err) console.log(err);
    console.log("file deleted");
  });
} else
  fs.writeFile("./deleteme.txt", "nothing...", () =>
    console.log("deleteme written")
  );
