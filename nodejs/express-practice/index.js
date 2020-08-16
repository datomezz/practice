const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const addRouter = require("./routes/add");
const cartRouter = require("./routes/cart");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is listening on port ${PORT}...`)
});

const hbs = exphbs.create({
    defaultLayout : "main",
    extname : "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/add", addRouter);
app.use("/cart", cartRouter);