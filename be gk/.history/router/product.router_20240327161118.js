const {
  createProductController,
  getAllProductController,
  getDetailProductController,
  updateProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.get("/find-product/:id", getDetailProductController);

productRouter.get("/update-product/:id", updateProductController);
productRouter.get("/", getAllProductController);
productRouter.post("/create", createProductController);

module.exports = {
  productRouter,
};
