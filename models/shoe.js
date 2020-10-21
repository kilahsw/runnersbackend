const mongoose = require("mongoose")
const { Schema, model } = mongoose

const shoesSchema = new Schema(
    {
        name: String,
        runType: String,
        img: String,
    },
    { timestamps: true }
);

const Shoes = model("shoes", shoesSchema);

module.exports = Shoes;