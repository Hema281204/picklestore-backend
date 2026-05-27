const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const orders =
      await Order.find();

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// GET ORDERS BY PHONE NUMBER
router.get(
  "/phone/:phone",
  async (req, res) => {
    try {

      const orders =
        await Order.find({
          phone:
            req.params.phone,
        }).sort({
          createdAt: -1,
        });

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  }
);


// CREATE ORDER
router.post("/", async (req, res) => {
  try {

    const order =
      new Order(req.body);

    const savedOrder =
      await order.save();

    res.status(201).json(
      savedOrder
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
});


// UPDATE ORDER STATUS
router.put(
  "/:id",
  async (req, res) => {
    try {

      const updatedOrder =
        await Order.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.json(updatedOrder);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  }
);


// DELETE ORDER
router.delete(
  "/:id",
  async (req, res) => {
    try {

      await Order.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Order Deleted Successfully",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  }
);

module.exports = router;