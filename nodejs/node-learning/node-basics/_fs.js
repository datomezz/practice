const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if(err) throw err;

//     console.log("file was created !");
// });

// fs.writeFile(
//     path.join(__dirname, "test", "juzaku.txt"), 
//     'hellow world', 
//     (err) => { 
//         if(err) throw err
//     }
// );

// fs.readFile(path.join(__dirname, "test", "juzaku.txt"), (err, data) => {
//     if(err) throw err;
//     console.log(Buffer.from(data).toString());
// });

fs.rename(
    path.join(__dirname, "test", "juzaku.txt"),
    path.join(__dirname, "test", "hello.txt"),
    err => {if(err) throw err}
)