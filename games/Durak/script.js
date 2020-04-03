let carts = document.querySelectorAll(".cart");
let ground = document.querySelector(".ground");

let origin = [
    '11','12','13','14','15','16','17','18','19',
    '21','22','23','24','25','26','27','28','29',
    '31','32','33','34','35','36','37','38','39',
    '41','42','43','44','45','46','47','48','49'
]
let playersArr = new Array();
let opponentsArr = new Array();


function setKoziri(){
    let koziri = document.querySelector(".koziri");
    let rand = Math.floor(Math.random() * 4) + 1;

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

    //Define Player's and Oponnent's Array
    if(opponentsArr.length != 6){
        opponentsArr.push(Number(origin[rand]));

    } else {
        playersArr.push(Number(origin[rand]));

    }

    origin.splice(rand, 1);



    carts[i].addEventListener("click", function(){
        let x = Number(carts[i].innerText);
        opponentsArr = opponentsArr.sort(function(a, b){return b - a}).reverse();

        let kindOfCartSort = new Array();
        let sameKindBiggerCart = new Array();

        for(let y of opponentsArr){
            if(y - x >= 0){
                kindOfCartSort.push(y);
            }
        }

        for(let y in kindOfCartSort){
            let x_value = carts[i].innerText.charAt(0);
            let y_value = kindOfCartSort[y].toString().charAt(0);
            let z = x_value === y_value;
            console.log(Boolean(z));

            if(Number(x_value) === Number(y_value)){
                sameKindBiggerCart.push(kindOfCartSort[y]);
            } else {
                kindOfCartSort.splice(y, 1);
                console.log(kindOfCartSort.splice(y, 1));
            }
        }

        let y = sameKindBiggerCart[0];

        ground.innerHTML = `
            <div class="cart box" style="background: lightblue">${carts[i].innerText}</div>
            <div class="cart box" style="background: pink">${y}</div>
        `;

    });
}

