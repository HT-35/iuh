const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

const port = 3000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/' , (req , res)=>{

   res.send('hello from simple server :)')

})("/", (req, res) => {
  console.log("called");
  res.json({
    status: true,
    data: "hello",
  });
});

app.listen(port, () => {
  console.log(`run at : http://localhost:${port}`);
});