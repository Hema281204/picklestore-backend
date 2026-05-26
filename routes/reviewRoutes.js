const express =
  require("express");

  const Product =
  require("../models/Product");

const Review =
  require("../models/Review");

const router =
  express.Router();

router.get(
  "/:productId",
  async (req, res) => {
    try {
      const reviews =
        await Review.find({
          productId:
            req.params
              .productId,
        });

      res.json(reviews);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

router.post(
  "/",
  async (req, res) => {
    try {
      const review =
        new Review(
          req.body
        );

      const savedReview =
        await review.save();

      // Get all reviews for this product
      const reviews =
        await Review.find({
          productId:
            req.body.productId,
        });

      // Calculate average rating
      const averageRating =
        reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        ) / reviews.length;

      // Update product
      await Product.findByIdAndUpdate(
        req.body.productId,
        {
          rating:
            averageRating.toFixed(
              1
            ),
          reviews:
            reviews.length,
        }
      );

      res.status(201).json(
        savedReview
      );

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports = router;