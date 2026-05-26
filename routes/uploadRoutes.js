const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("FILE:", req.file);

      const result =
        await cloudinary.uploader.upload(
          req.file.path
        );

      res.json({
        imageUrl:
          result.secure_url,
      });

    } catch (error) {
      console.log(
        "UPLOAD ERROR:"
      );

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports = router;