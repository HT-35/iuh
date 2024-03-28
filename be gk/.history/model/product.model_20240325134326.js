const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,
});

const productModel = mongoose.mode("productSchema", productSchema);
