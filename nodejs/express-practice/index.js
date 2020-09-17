const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const connection = require("./routes/mysql");
const midVariables = require("./middleware/variables");

const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const addRouter = require("./routes/add");
const cartRouter = require("./routes/cart");
const authRouter = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(session({
    secret : "pizdec",
    resave : false,
    saveUninitialized : false
}));
app.use(midVariables);

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/add", addRouter);
app.use("/cart", cartRouter);
app.use("/auth", authRouter);