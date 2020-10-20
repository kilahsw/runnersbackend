const { Schema, model } = require("mongoose")

const runnerSchema = new Schema(
    {
        name: String,
        runStyle: String,
    },
    { timestamps: true }
);

const Runner = model("Runner", runnerSchema);

module.exports = Runner;