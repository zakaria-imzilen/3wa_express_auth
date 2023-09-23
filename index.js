const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { mainRoutes } = require("./routes");
const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // HTML CSS

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(PORT);
