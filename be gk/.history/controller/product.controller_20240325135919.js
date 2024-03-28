const productController = async (req, res) => {

  try {


  const data = req.body;

  const createProduct = await productModel.create({ data });

  res.json({
    status: true,
    data: data,
  });
};
module.exports = {
  productController,
};
