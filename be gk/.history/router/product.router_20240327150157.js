const {
  createProductController,
  getAllProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.get("/", getAllProductController);
productRouter.post("/create", createProductController);

productRouter.get("/find-product", getAllProductController);

module.exports = {
  productRouter,
};
