const path = require("path");

console.log(path.basename(__filename), "Basename");
console.log(path.dirname(__filename), "Dirname", __filename);
console.log(path.extname(__filename), "Extname");

console.log(path.parse(__filename));
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).root)