const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  MaNV: String,
  TenNV: String,
  NgaySinh: Date,
  GioiTinh: String,
  Email: String,
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
