let carts = document.querySelectorAll(".cart");
let origin = [
    '11','12','13','14','15','16','17','18','19',
    '21','22','23','24','25','26','27','28','29',
    '31','32','33','34','35','36','37','38','39',
    '41','42','43','44','45','46','47','48','49'
]
console.log(origin);
for(let i = 0; i < carts.length; i++){
    let rand = Math.floor(Math.random() * origin.length);
    carts[i].innerText = origin[rand];

    origin.splice(rand, 1);

    console.log(origin);

}