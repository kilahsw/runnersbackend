const mongoose = require("mongoose")
const { Schema, model } = mongoose

const runnersSchema = new Schema(
    {
        name: String,
        runStyle: String,
        shoes: [{ type: mongoose.Types.ObjectId, ref: "Shoes" }]
    },
    { timestamps: true }
);

const Runners = model("Runners", runnersSchema);

module.exports = Runners;