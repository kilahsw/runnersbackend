const { Schema, model } = require("mongoose")

const shoeSchema = new Schema(
    {
        name: String,
        runType: String,
        img: String,
    },
    { timestamps: true }
);

const Shoe = model("Shoe", shoeSchema);

module.exports = Shoe;