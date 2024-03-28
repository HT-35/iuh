const productController = async (req, res) => {
  console.log(req.body);
  res.json({
    status: true,
    data: "hello",
  });
};
module.exports = {
  productModel,
};
