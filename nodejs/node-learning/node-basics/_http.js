const http = require("http");

const server = http.createServer((req, res) => {
    if(req.method === "GET") {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(
            `<form method='POST' action='/'>
                <input name="title" type="text" placeholder="text">
                <button type="submit">Click</button>
            </form>
            `
        );
        res.end();
    } else if(req.method === "POST") {
        const body = [];

        req.on("data", data => {
            body.push(Buffer.from(data));
        });

        req.on("end", () => {
            const message = body;
            res.end(`<h1>oe ${message}</h1>`);
        });

    }
}).listen(3000, () => {
    console.log("Server is listening on port 3000...");
});