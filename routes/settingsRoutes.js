const mongoose =
  require("mongoose");

const settingsSchema =
  new mongoose.Schema({
    storeName: String,

    whatsappNumber:
      String,

    deliveryCharge:
      Number,

    freeDeliveryAbove:
      Number,

    storeAddress:
      String,
  });

module.exports =
  mongoose.model(
    "Settings",
    settingsSchema
  );