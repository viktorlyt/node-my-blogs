import express from "express";
import path from "path";
import morgan from "morgan";
import mongoose from "mongoose";
import { render } from "ejs";
import { router } from "./routes/blogRoutes.js";

//express app
const app = express();

//connect to mongoDB
const dbURL =
  "mongodb+srv://netviktorlyt:test123@nodetuts.xrxmrto.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to the DB");
    //listen for requests
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//mongoose & mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("64fb520148998cc86e139113")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

app.get("/about", (req, res) => {
  //   res.send("<p>About page</p>");
  //   const aboutPath = new URL("views/about.html", import.meta.url).pathname;
  //   res.sendFile(aboutPath);
  res.render("about", { title: "About" });
});

//redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/", (req, res) => {
  //   res.send("<p>Home page</p>");
  //   const indexPath = new URL("views/index.html", import.meta.url).pathname;
  //   res.sendFile(indexPath);
  //   const blogs = [
  //     {
  //       title: "Yoshi finds eggs",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //       title: "Mario finds stars",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //       title: "How to defeat bowser",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //   ];
  //   res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

//blog routes
app.use("/blogs", router);

//404
app.use((req, res) => {
  //   const aboutPath = new URL("views/404.html", import.meta.url).pathname;
  //   res.status(404).sendFile(aboutPath);
  res.status(404).render("404", { title: "404" });
});
