const {
  createProductController,
  getAllProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.get("/find-product", getAllProductController);
productRouter.get("/", getAllProductController);
productRouter.post("/create", createProductController);

module.exports = {
  productRouter,
};
