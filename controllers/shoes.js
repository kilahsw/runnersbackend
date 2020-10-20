const Shoe = require("../models/shoe");
const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
    res.json(await Shoe.find({}));
});




module.exports = router;