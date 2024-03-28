const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
const { connectDB } = require("./config/connectDb.config");
const { root } = require("./router/root.router");

const port = 3000;

connectDB();

app.use(cors());

app.use("/", root);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`run at : http://localhost:${port}`);
});
