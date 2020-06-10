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
    className : "open door"
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

//Tranform CSS class to JS CSS class
let comelizeString = "background-color";

function comelize(str) {
    str = str.split("-");
    let newClass = "";
    for(let i = 0; i < str.length; i++){
        let strArr = [];
        for(let y = 0; y < str[i].length; y++){
            if(i > 0 && y == 0){
                strArr.push(str[i].charAt(y).toUpperCase());
            } else {
                strArr.push(str[i].charAt(y));
            }
        }

        newClass += strArr.join("");
    }
    return newClass;
}

console.log(comelize(comelizeString));
//Tranform CSS class to JS CSS class

//remove Class from Obj
function removeClass(obj, cls){
    let str = obj.className;
    str = str.split(" ");
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === cls){
            str[i] = "";
            console.log(str);
        }
    }
    str = str.join("");
    return str;
}

console.log(removeClass(obj, "open"));
//remove Class from Obj

//Array Filter everything between 2 numbers
let filterArr = [5, 3, 8, 1, 4, 7, 0, 13, 23];

function filterRangeInPlace(arr, a, b){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > a && arr[i] < b) {
            newArr.push(arr[i]);
        }
    }
    arr = [];

    for(let i = 0; i < newArr.length; i++){
        arr.push(newArr[i]);
    }

    return arr;

}

console.log(filterRangeInPlace(filterArr, 1, 23));
//Array Filter everything between 2 numbers

//Negative Sort
let sortArr = [5, 2, 1, -10, 8];

sortArr.sort(function (b, a){return a-b});

console.log(sortArr);
//Negative Sort


//Sort String Arrays
let stringArr = ["HTML", "Javascript", "CSS", "Bootstrap", "PHP", "MYSQL", "SASS/SCSS", "GIT", "AJAX", "Wordpress", "WooCommerce"];

function stringSort(arr) {
    let newStringArr = [];

    for(let i = 0; i < arr.length; i++) {
        newStringArr.push(arr[i]);
    }
    
    return newStringArr.sort();
}

console.table(stringSort(stringArr));
console.log(stringArr);
//Sort String Arrays

//random number array
let numberArr = [1,2,3,4,5,6];
console.log("random array numbers :", numberArr.sort(() => Math.random() - 0.5));
//random number array

//Sort Objects in array
let dato = { name: "Dato", age: 23 };
let natia = { name: "Natia", age: 25 };
let mari = { name: "Mari", age: 18 };

let people = [dato, natia, mari];

console.log(people.sort((a,b) => {return a.age - b.age}));
//Sort Objects in array

