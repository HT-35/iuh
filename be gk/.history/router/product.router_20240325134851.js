const productRouter = require("express").Router();

productRouter.post("/", productController);

module.exports = {
  productRouter,
};
