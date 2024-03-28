const { productRouter } = require("./product.router");

const root = require("express").Router();

root.use("/product", productRouter);
root.use("/", productRouter);

module.exports = {
  root,
};
