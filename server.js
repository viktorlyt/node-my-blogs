import http from "http";
import fs from "fs";
import _ from "lodash";

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello!");
  });

  greet();
  greet();

  //set header content type
  //   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //   res.write("Hello, Viktor!");
  //   res.write("<p>Hello, Viktor!</p>");
  //   res.write("<p>Hello again, Viktor!</p>");
  //   res.end();

  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
