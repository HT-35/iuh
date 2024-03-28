const productController = async (req, res) => {
  const data = req.body);



  const createProduct = await productModel.create({
  })

  res.json({
    status: true,
    data: "hello",
  });
};
module.exports = {
  productController,
};
