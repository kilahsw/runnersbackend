const Runner = require("../models/runner");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
    res.json(await Runner.find({}));
});






module.exports = router