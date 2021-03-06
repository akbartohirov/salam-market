const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: [],
    category: { type: String, required: true },
    color: { type: String },
    boughtPrice: { type: String, required: true },
    sellPrice: { type: String, required: true },
    amount: { type: Number, required: true },
    soldProductAmount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
