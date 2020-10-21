const Shoe = require("../models/shoe");
const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
    res.json(await Shoe.find({}));
});

//create route
router.post("/", async (req, res) => {
    res.json(await Shoe.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
    res.json(await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
    res.json(await Shoe.findByIdAndRemove(req.params.id));
});



module.exports = router;