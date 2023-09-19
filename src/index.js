const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const route = require("./routes");

const app = express();
const port = 3000;

// truy cap rq.body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

app.use(morgan("combined"));

//Template Engine hbs
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);

// 127.0.0.1 - localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// npm start // npm run watch //
