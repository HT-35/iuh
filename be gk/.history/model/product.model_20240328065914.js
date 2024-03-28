const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,

  MaNV:T,
  TenNV:T,
  NgaySinh:T,
  GioiTinh:T,
  Email:T,
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
