const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  product: String,
  price: Number,
});


const productModel = 