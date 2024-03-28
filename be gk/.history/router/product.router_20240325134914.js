const { productController } = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.post("/", productController);

module.exports = {
  productRouter,
};
