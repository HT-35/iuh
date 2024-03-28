const {
  createProductController,
  getAllProductController,
  getDetailProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.get("/find-product/:id", getDetailProductController);

productRouter.get("/find-product/:id", getDetailProductController);
productRouter.get("/", getAllProductController);
productRouter.post("/create", createProductController);

module.exports = {
  productRouter,
};
