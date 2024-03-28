const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,

  MaNV:String,
  TenNV:String,
  NgaySinh:String,
  GioiTinh:String,
  Email:String,
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
