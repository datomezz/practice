import "./styles.css";
import json from "./assets/some.json";
import jpg from "./1.jpg";
import font from "./Roboto-Regular.ttf";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@src/style.scss";
import * as $ from "jquery";

$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

console.log("hellow");
console.log(json);
console.log(jpg);
console.log(font);

$("h1").addClass("yleoShen").html("<h3>pizdec</h3>");