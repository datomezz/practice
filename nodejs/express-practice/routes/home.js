const express = require("express");
const router = express.Router();
const authValidation = require("../middleware/auth");
const CreateUser = require("../models/Create_user");
const Dbman = require("../models/Dbman");

router.get("/", async (req, res) => {
    const users = await CreateUser.getAll();
    const db = await Dbman.selectAll("test");

    res.render("index", {
        title : "Main",
        navbarActive : true,
        users : users,
        db : db
    });

});

router.get("/id=:id", authValidation, async (req, res) => {
    const users = await CreateUser.getById(req.params.id);

    res.render("post", {
        content : users
    });
});

router.get("/edit/id=:id", authValidation, async (req, res) => {
    console.log(req.params.id);
    const users = await CreateUser.getById(req.params.id);
    console.log('users', users);

    res.render("edit", {
        title : "Edit Page",
        content : users
    });
});

module.exports = router;