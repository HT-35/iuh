const productController = async (req, res) => {
  try {
    const data = req.body;

    const createProduct = await productModel.create({ data });

    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      data: error.message,
    });
  }
};
module.exports = {
  productController,
};