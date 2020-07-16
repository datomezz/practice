const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

app.listen(3000, () => {
    console.log("Express Listens on port 3000...");
});

app.get("/", (req, res) => {
    res.render("main",{
        name : "dato",
        surname : "mezz"
    });
});