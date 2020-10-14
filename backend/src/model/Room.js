const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    localidade: {
      type: String,
      required: true
    },
    morador: {
        type: String,
        required: true
    },
    custo: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Room", RoomSchema);