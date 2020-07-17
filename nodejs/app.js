const express = require("express");
const app = express();

const mysql = require("mysql");
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "nodejs"
});

app.use(express.static("public"));
app.set("view engine", "pug");

app.listen(3000, () => {
    console.log("Express Listens on port 3000...");
});

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/posts", (req, res) => {
    let posts = new Promise((resolve, reject) => {
        con.query(
            "SELECT * FROM posts",
            function(err, result) {
                if(err) reject(err);
                resolve(result);
            }
        );
    });

    posts.then((value) => {
        let goods = {};
        for(let i = 0; i < value.length; i++) {
            goods[value[i]["id"]] = value[i];
        }

        res.render("posts",{
            name : "dato",
            surname : "mezz",
            goods : JSON.parse(JSON.stringify(goods))
        })
    }
    );
});

app.get("/post", (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req.query.id);
        con.query(
            `SELECT * FROM posts`,
            (err, result) => {
                if(err) reject(err);
                resolve(result);
                console.log(resolve(result));
            }
        );
    }).then((value) => {
        let post = {};
        for(let i = 0; i < value.length; i++) {
            post[value[i]["id"]] = value[i];
        }
        res.render("post", {
            post : JSON.parse(JSON.stringify(post))
        });
    });
});