const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    stock: {
  type: Number,
  default: 0,
},

    image: {
      type: String,
    },

    prices: {
  "250g": {
    type: Number,
    required: true,
  },

  "500g": {
    type: Number,
    required: true,
  },

  "1kg": {
    type: Number,
    required: true,
  },
},

    rating: {
      type: Number,
      default: 4.5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Product",
    productSchema
  );