let container = document.querySelector(".container");
// create function witch will check if object is empty or not. Retur Boolean
function isEmpty(obj){
    let count = 0;
    for(let key in obj){
        count++;
    }
    if(count == 0){
        return true;
    } else {
        return false;
    }
}
let myObj = {
    "first" : "second",
    "third" : "forth"
};

console.log(isEmpty(myObj));
// create function witch will check if object is empty or not. Retur Boolean

// create function witch will sum object values
let salaries = {
    "Dato" : 325,
    "Mari" : 300,
    "Toma" : 120,
    "Nana" : 1234,
    "Natia" : 315
}

function sumObjectValues(obj){
    let sum = 0;    
    for(let values of Object.values(obj)){
        sum += values;
    }
    console.log(`Object keys sum = ${sum}`);
}

sumObjectValues(salaries);
// create function witch will sum object values

// have to show object's the biggest net worth key
function checkNetWorth(obj){
    let values = Object.values(obj).sort(function(a, b){ return a-b});
    let biggest = values[values.length - 1];
    let entireObj = Object.entries(salaries);

    for(let key of entireObj){
        if( key[1] == biggest){
            console.log(`${key[0]}'s net worth is the biggest`);
        }
    }
}

checkNetWorth(salaries);
// have to show object's the biggest net worth key

//Rise object numeric values x2
let menu = {
    pizdec : "314zdec",
    width : 200,
    height : 300,
    shkshk : 213,
    alakh : "akbar",
    pi : 314,
    title : "My Menu"
}

function multiplyNumeric(obj){
    let values = Object.values(obj);
    let keys = Object.keys(obj);
    let entireObj = Object.entries(obj);

    let count = 0;

    for(let key of values){
        if(Number(key)){
            let currentObj = entireObj[count];

            obj[`${entireObj[count][count]}`] == key*2;
            obj[`${currentObj[0]}`] = entireObj[count][1] * 2;
        }
        count++;
    }
    console.log(obj);
}

multiplyNumeric(menu);
//Rise object numeric values x2

//adding class in string
let obj = {
    className : "open"
}

function addClass(obj, cls){
    let str = obj.className;
    str = str.split(" ");

    for(let i = 0; i < str.length; i++){
        if(str[i] === cls){
            console.log("class exists");
            return "classExists";
        }
    }

    obj.className = cls;
    return obj.className;

}
console.log(addClass(obj, "open"));
//adding class in string

