const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

app.use(morgan("combined"));

//Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

// 127.0.0.1 - localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// npm start // npm run watch //
