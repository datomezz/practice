const express = require("express");
const router = express.Router();
const con = require("./mysql");
const CreateUser = require("../models/Create_user");

router.get("/", async (req, res) => {
    const users = await CreateUser.getAll();
    res.render("index", {
        title : "Main",
        navbarActive : true,
        users : users
    });
});

router.get("/id=:id", async (req, res) => {
    const users = await CreateUser.getById(req.params.id);

    res.render("post", {
        content : users
    });
});

router.get("/edit/id=:id", async (req, res) => {
    console.log(req.params.id);
    const users = await CreateUser.getById(req.params.id);
    console.log('users', users);

    res.render("edit", {
        title : "Edit Page",
        content : users
    });
});

module.exports = router;