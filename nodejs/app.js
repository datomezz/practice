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

app.use(express.json());

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
            "SELECT * FROM nodejs",
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

        res.render("posts", {
            name : "dato",
            surname : "mezz",
            goods : JSON.parse(JSON.stringify(goods))
        })
    }
    );
});

app.get("/post", (req, res) => {
    return new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM nodejs WHERE id="${req.query.id}"`,
            function(err, result) {
                if(err) reject(err);
                resolve(result);
            }
        );
    }).then((value) => {
        let allPosts = {};
        for(let i = 0; i < value.length; i++) {
            allPosts[value[i]["id"]] = value[i];
        }
        console.log(allPosts);

        res.render("post", {
            allPosts : JSON.parse(JSON.stringify(allPosts))
        });
    }).catch((err) => {
        console.log(err);
    })
});

app.get("/burdul", (req, res) => {
    console.log(req.body);
    res.render("burdul");
});

app.post("/test", (req, res) => {
    console.log(req.body.click);    

    con.query(
        `SELECT * FROM clicker WHERE id=1`,
        (err, result) => {
            if(err) throw err;
            let obj = {};
            for(let i = 0; i< result.length; i++) {
                obj[result[i]["id"]] = result[i];
            }
            value = obj[1]["click"];
        }
    );
    // console.log(value, "value");
    value += req.body.click;
    console.log(value, "value");

    con.query(
        `UPDATE clicker SET click = '${value}' WHERE id= '1'`,
        (err, result) => {
            if(err) throw err;
        }
    )

    con.query(
        `SELECT * FROM clicker WHERE id=1`,
        (err, result) => {
            if(err) throw err;
            let obj = {};
            for(let i = 0; i< result.length; i++) {
                obj[result[i]["id"]] = result[i];
            }
            console.log(result[0]["click"], "result");
            console.log(obj, "obj");
            res.json(result[0]["click"]);
        }
    );
});