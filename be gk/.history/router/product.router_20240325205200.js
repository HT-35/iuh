const {
  createProductController,
  getAllProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.post("/", getAllProductController);
productRouter.get("/create", createProductController);

module.exports = {
  productRouter,
};
