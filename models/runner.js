const { Schema, model } = require("mongoose")

const runnersSchema = new Schema(
    {
        name: String,
        runStyle: String,
    },
    { timestamps: true }
);

const Runners = model("Runners", runnersSchema);

module.exports = Runners;