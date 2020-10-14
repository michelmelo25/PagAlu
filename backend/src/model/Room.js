const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    andar: {
      type: String,
      required: true
    },
    numero: {
      type: String,
      required: true
    },
    morador: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Room", RoomSchema);