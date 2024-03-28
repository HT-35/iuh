const {
  createProductController,
  getAllProductController,
} = require("../controller/product.controller");

const productRouter = require("express").Router();

productRouter.get("/create", createProductController);
productRouter.post("/", getAllProductController);

module.exports = {
  productRouter,
};
