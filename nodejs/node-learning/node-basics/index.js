const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if(req.method === "GET") {
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

        if(req.url === "/") {
            fs.readFile(path.join(__dirname, "views", "index.html"), "utf-8", (err, data) => {
                if(err) throw err;
                res.end(data);
            });
        }
    }

    if(req.method === "POST") {
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        
        const body = [];

        req.on("data", data => {
            body.push(Buffer.from(data).toString());
            console.log(body);
        });

        req.on("end", () => {
            res.end(body[0]);
        });
    }
});

server.listen(3000, () => {
    console.log("Server is Listening on port 3000...");
});

