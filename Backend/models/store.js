const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    userID: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      // ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("store", StoreSchema);
module.exports = Store;
