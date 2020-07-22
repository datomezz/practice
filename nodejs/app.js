const express = require("express");
const app = express();

const mysql = require("mysql");
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "datom3zz",
    database : "zzD"
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

app.get("/test", (req, res) => {
    con.query(
      "SELECT * FROM nodejs",
      (err, result) => {
          if(err) throw err;
          let obj = {};
          for(let i = 0; i < result.length; i++) {
              obj[result[i]["id"]] = result[i];
          }

          res.render("test", {
            obj : JSON.parse(JSON.stringify(obj))
          });
      }  
    );
});

app.get("/burdul", (req, res) => {
    let x = new Promise((resolve, reject) => {
        setInterval(function(){
            let rand = Math.floor(Math.random() * 1000);
            resolve(rand);
        }, 1000);
    });

    x.then((value) => {
        con.query(`INSERT INTO async (value) VALUES (${value})`);
        con.query(
            `SELECT * FROM async`,
            (err, result) => {
                if(err) throw err;

                let obj = {}
                for(let i = 0; i < result.length; i++) {
                    obj[result[i]["id"]] = result[i];
                }
                
                res.render("burdul", {
                    rand : JSON.parse(JSON.stringify(obj))
                });
            }
        );
    }).catch((err) => console.log(err));

});
