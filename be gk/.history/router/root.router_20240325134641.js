const root = require("express").Router();

root.use("/product", product);

module.exports = {
  root,
};
