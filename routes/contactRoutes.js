const express =
  require("express");

const ContactMessage =
  require("../models/ContactMessage");

const router =
  express.Router();

router.post(
  "/",
  async (req, res) => {
    try {
      const message =
        new ContactMessage(
          req.body
        );

      const savedMessage =
        await message.save();

      res.status(201).json(
        savedMessage
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

router.get(
  "/",
  async (req, res) => {
    try {
      const messages =
        await ContactMessage.find()
          .sort({
            createdAt: -1,
          });

      res.json(messages);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports = router;