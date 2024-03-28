const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,

  MaNV:S,
  TenNV:S,
  NgaySinh:S,
  GioiTinh:S,
  Email:S,
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
