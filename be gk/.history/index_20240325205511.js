const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
const { connectDB } = require("./config/connectDb.config");
const { root } = require("./router/root.router");

const port = 3000;

connectDB();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//router 
app.get("/", async (req, res) => {
 
  const findAll = await productModel.find();

  res.status(200).json({
    status: true,
    data: findAll,
  });

}

  
  app.post("/create", createProductController)

app.listen(port, () => {
  console.log(`run at : http://localhost:${port}`);
});
