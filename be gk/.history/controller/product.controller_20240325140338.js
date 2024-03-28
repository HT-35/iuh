const { productModel } = require("../model/product.model");

const productController = async (req, res) => {
  try {
    const data = req.body.data;
    console.log("productController ~ data:", data);

    // const createProduct = await productModel.create({ data });

    res.status(200).json({
      status: true,
      data: data,
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
