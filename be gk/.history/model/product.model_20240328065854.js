const { mongoose, Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,

  
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = {
  productModel,
};
