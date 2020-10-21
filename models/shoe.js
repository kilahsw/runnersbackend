const { Schema, model } = require("mongoose")

const shoesSchema = new Schema(
    {
        name: String,
        runType: String,
        img: String,
    },
    { timestamps: true }
);

const Shoes = model("Shoes", shoesSchema);

module.exports = Shoes;