const root = require("express").Router();

root.use("/product", productController);

module.exports = {
  root,
};
