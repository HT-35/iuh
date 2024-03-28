const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

const port = 3000;

const mongoose = require("mongoose");


const connectDB = () => {

  try {
    await mongoose.connect()
  } catch (error) {
    
  }

}


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: true,
    data: "hello",
  });
});

app.listen(port, () => {
  console.log(`run at : http://localhost:${port}`);
});
