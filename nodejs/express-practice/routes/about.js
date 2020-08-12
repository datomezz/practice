const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("about", {
        title : "About",
        aboutActive : true
    });
});

module.exports = router;