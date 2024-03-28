const { default: mongoose } = require("mongoose");
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

// Lấy tất cả danh sach
const getAllProductController = async (req, res) => {
  try {
    const findAll = await productModel.find();

    res.status(200).json({
      status: true,
      data: findAll,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      data: error.message,
    });
  }
};
const getDetailProductController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const _id = new mongoose.Types.ObjectId(id);
    console.log(_id);
    const findAll = await productModel.findOne({ _id });

    res.status(200).json({
      status: true,
      data: findAll,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      data: error.message,
    });
  }
};

module.exports = {
  createProductController,
  getAllProductController,
  getDetailProductController,
  updateProductController,
};
