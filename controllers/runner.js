const Runner = require("../models/runner");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
    res.json(await Runner.find({}));
});

//create route
router.post("/", async (req, res) => {
    res.json(await Runner.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
    res.json(await Runner.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
    res.json(await Runner.findByIdAndRemove(req.params.id));
});





module.exports = router