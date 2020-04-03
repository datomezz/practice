let carts = document.querySelectorAll(".cart");
let origin = [
    '11','12','13','14','15','16','17','18','19',
    '21','22','23','24','25','26','27','28','29',
    '31','32','33','34','35','36','37','38','39',
    '41','42','43','44','45','46','47','48','49'
]

function setKoziri(){
    let koziri = document.querySelector(".koziri");
    let rand = Math.floor(Math.random() * 4) + 1;
    console.log(rand);
    switch(rand){
        case 1 : for(let i = 0; i <= 8; i++){origin[i] += "0"} koziri.style.background = "pink";
        break;
        case 2 : for(let i = 9; i <= 17; i++){origin[i] += "0"} koziri.style.background = "tomato";
        break;
        case 3 : for(let i = 18; i <= 26; i++){origin[i] += "0"} koziri.style.background = "lightgreen";
        break;
        case 4 : for(let i = 27; i <= 35; i++){origin[i] += "0"} koziri.style.background = "lightblue";
        break;
    }
}

setKoziri();

for(let i = 0; i < carts.length; i++){
    let rand = Math.floor(Math.random() * origin.length);
    carts[i].innerText = origin[rand];

    let switchNumber = origin[rand].charAt(0);
    switchNumber = Number(switchNumber);

    switch(switchNumber){
        case 1 : carts[i].style.background = "pink";
        break;
        case 2 : carts[i].style.background = "tomato";
        break;
        case 3 : carts[i].style.background = "lightgreen";
        break;
        case 4 : carts[i].style.background = "lightblue";
        break;
    }
    origin.splice(rand, 1);

    console.log(origin);

}