const mongoose =
  require("mongoose");

const reviewSchema =
  new mongoose.Schema(
    {
      productId: {
        type: String,
        required: true,
      },

      customerName:
        String,

      rating: Number,

      comment: String,
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Review",
    reviewSchema
  );