const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    valor: {
        type: Number,
        required: true
    },
    vencimento: {
        type: Date,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Conta", ContaSchema);