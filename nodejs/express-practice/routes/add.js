const {Router} = require("express");
const router = Router();
const con = require("./mysql");
const CreateUser = require("../models/Create_user");

router.get("/", (req, res) => {
    res.render("add", {
        title : "Add",
        addActive : true
    });
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const addUser = new CreateUser(req.body.name, req.body.surname, req.body.price);

    await addUser.save();
    res.redirect("/");
});

router.post("/re-write", async (req, res) => {

    await CreateUser.reWrite(req.body.id, req.body.name, req.body.surname, req.body.price);
    res.redirect("/");
});

module.exports = router;