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

router.get("/id=:id&name=:name", async (req, res) => {
    const users = await CreateUser.getById(req.params.id);
    console.log(req.params);
    res.render("index");
});

module.exports = router;