const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    contas: Array,
    adm: {
      type: String,
      required: true
    },
    membros: {
        type: Array,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Room", RoomSchema);