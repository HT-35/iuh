const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,

  MaNV,
  TenNV,
  NgaySinh,
  GioiTinh,
  Email,
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
