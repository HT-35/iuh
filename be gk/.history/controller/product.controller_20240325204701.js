const { productModel } = require("../model/product.model");



const createProductController = async (req, res) => {
  try {
    const data = req.body;
    console.log("productController ~ data:", data);

    const createProduct = await productModel.create(data);

    res.status(200).json({
      status: true,
      data: createProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      data: error.message,
    });
  }
};
module.exports = {
  productController,
};
