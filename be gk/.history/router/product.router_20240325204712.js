const { createProductController } = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.post("/", createProductController);

module.exports = {
  productRouter,
};
