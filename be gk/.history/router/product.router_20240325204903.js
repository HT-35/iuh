const { createProductController } = require("../controller/product.controller");

const productRouter = require("express").Router();


productRouter.post("/", createProductController);
productRouter.post("/create", createProductController);

module.exports = {
  productRouter,
};
