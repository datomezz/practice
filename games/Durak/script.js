let carts = document.querySelectorAll(".cart");
let ground = document.querySelector(".ground");

let player = document.querySelector(".player");
let opponent = document.querySelector(".opponent");

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
        //Disapear chosen cart on display and on array
        carts[i].style.display = "none";
        playersArr.splice(i-6, 1);


        //sort carts for new
        let x = Number(carts[i].innerText);
        opponentsArr = opponentsArr.sort(function(a, b){return b - a}).reverse();

        let kindOfCartSort = new Array();
        let sameKindBiggerCart = new Array();

        for(let y of opponentsArr){
            if(y - x >= 0){
                kindOfCartSort.push(y);
            }
        }
        console.log(kindOfCartSort, "kind of sort");
        //kartis migheba (bot)
        if(kindOfCartSort[0] === undefined){
            let out = new String();
            //aq unda iyos undenfined-is dros reaqcia realizebuli
            let style = new String();
            switch(Number(carts[i].innerText.charAt(0))){
                case 1 : style = "background : pink";
                break;
                case 2 : style = "background : tomato";
                break;
                case 3 : style = "background : lightgreen";
                break;
                case 4 : style = "background : lightblue";
                break;
            }
            opponent.innerHTML += `
            <a href="javascript:void(0)" class="cart" style="${style}">${carts[i].innerText}</a>
            `;

            opponentsArr.push(Number(carts[i].innerText));

            let sameValueCart = carts[i].innerText.charAt(1);

            for(let i = 0; i < playersArr.length; i++){
                if(Number(playersArr[i].toString().charAt(1)) != sameValueCart){
                    for(let x in carts){
                        if(Number(carts[x].innerText) == playersArr[i]){

                            carts[x].style.background = "red";
                            carts[x].style.pointerEvents = "none";
                        }
                    }

                }
            }
            console.log(opponentsArr, "opponentsArr");

            console.log("unda miighos botma");
            
        } else {

            for(let y in kindOfCartSort){
                let x_value = carts[i].innerText.charAt(0);
                let y_value = kindOfCartSort[y].toString().charAt(0);
                let z = x_value === y_value;
    
    
                if(Number(x_value) === Number(y_value)){
                    sameKindBiggerCart.push(kindOfCartSort[y]);
                } else {
                    kindOfCartSort.splice(y, 1);
                }
            }
            //kartis migheba (bot)
            if(sameKindBiggerCart.length == 0){
                //this script works when bot take carts
                let style = new String();
                switch(Number(carts[i].innerText.charAt(0))){
                    case 1 : style = "background : pink";
                    break;
                    case 2 : style = "background : tomato";
                    break;
                    case 3 : style = "background : lightgreen";
                    break;
                    case 4 : style = "background : lightblue";
                    break;
                }
                
                opponent.innerHTML += `
                <a href="javascript:void(0)" class="cart" style="${style}">${carts[i].innerText}</a>
                `;
                
                opponentsArr.push(Number(carts[i].innerText));

                let sameValueCart = carts[i].innerText.charAt(1);

                for(let i = 0; i < playersArr.length; i++){
                    if(Number(playersArr[i].toString().charAt(1)) != sameValueCart){
                        for(let x in carts){
                            if(Number(carts[x].innerText) == playersArr[i]){

                                carts[x].style.background = "red";
                                carts[x].style.pointerEvents = "none";
                            }
                        }

                    }
                }
                
            }
            
            else {
                let y = sameKindBiggerCart[0];
        
                for(let num in opponentsArr){
                    if(carts[num].innerText == sameKindBiggerCart[0]){
                        carts[num].style.display = "none";
                    }
                    if(opponentsArr[num] == sameKindBiggerCart[0]){
                        opponentsArr.splice(num, 1);
                    }
                }
                
    
                //add elements to battleground
                ground.innerHTML = `
                    <div class="cart box">${carts[i].innerText}</div>
                    <div class="cart box">${y}</div>
                `;
                //defines style of this new elements
                let cartBox = document.querySelectorAll(".box");

                for(let x = 0; x < cartBox.length; x++){
                    switch(Number(cartBox[x].innerText.charAt(0))){
                        case 1 : cartBox[x].style.background  = "pink";
                        break;
                        case 2 : cartBox[x].style.background  = "tomato";
                        break;
                        case 3 : cartBox[x].style.background  = "lightgreen";
                        break;
                        case 4 : cartBox[x].style.background  = "lightblue";
                        break;
                    }
                }
                
                //let player move the same value cart or not
                let sameValueCart = cartBox[0].innerText.charAt(1);

                for(let i = 0; i < playersArr.length; i++){
                    if(Number(playersArr[i].toString().charAt(1)) != sameValueCart){
                        for(let x in carts){
                            if(Number(carts[x].innerText) == playersArr[i]){

                                carts[x].style.background = "red";
                                carts[x].style.pointerEvents = "none";
                            }
                        }

                    }
                }

            }
        }


    });
}

