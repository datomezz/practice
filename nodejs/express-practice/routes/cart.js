const express = require("express");
const router = express.Router();
const authValidation = require("../middleware/auth");

router.get("/", (req, res) => {
    res.render("cart", {
        title : "Cart"
    });
});

router.post("/add", authValidation, async (req, res) => {
    console.log(req.body);
});

module.exports = router;