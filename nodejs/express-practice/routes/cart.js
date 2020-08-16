const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("cart", {
        title : "Cart"
    });
});

router.post("/add", (req, res) => {
    console.log(req.body);
});

module.exports = router;