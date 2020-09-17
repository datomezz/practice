const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("auth", {
    title : "Login Page",
    loginActive : true
  });
});

router.post("/login", async (req, res) => {
  req.session.isAuth = true,
  res.redirect("/");
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;