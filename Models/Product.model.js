const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   price: {
//     type: Number,
//     required: true,
//   },
// });

const newProduct = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: 
      {
        rate: Number,
        count: Number,
      },
    default: undefined,
  },
});

// const product = mongoose.model("newproduct", productSchema);

const product = mongoose.model("products", newProduct)

module.exports = product;
