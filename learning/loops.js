let arr = ["Dato", "Natia", "Mano", "Maro", "Manana"];

let obj = [
    {id : 1, name : "Dato", age : 23},
    {id : 2, name : "Natia", age : 25},
    {id : 3, name : "Mano", age : 18},
    {id : 4, name : "Maro", age : 6}
];

let numArr = [1, 2, 3, 4, 5];

arr.forEach(function(item, index, array) {
    value = `${item}, Number : ${index}, Whole Array : ${array}`;
    console.log("Function Method : ", value);
});

arr.forEach((raghac, random, sityvebi) => {
    value = `${raghac} ${random} ${sityvebi}`;
    console.log(raghac, random, sityvebi);
});

let path = "../ajax.json";

document.documentElement.addEventListener("click", () => {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let parse = JSON.parse(this.response);
            parse = parse.posts;
            let container = document.querySelector(".container");
            let sum = "";

            parse.forEach( (item, index) => {
                sum += `<h5>ID : ${index}</h5>
                        <h4>Title : ${item["title"]}</h4>
                        <h3>Author : ${item["author"]}</h3>
                `;
            });
            container.innerHTML = sum;
            console.log("Response : ", parse);
        }
    }
    req.open("GET", path);
    req.send();
});

console.log(arr.indexOf("Mano"));

let result = arr.find(function(index){
    return index == 0;
});

console.log(result);

let otherResult = obj.find(item => {
    return item.id > 1;
});

console.log(otherResult);

let numResult = numArr.map(item => {
    return item *= item;
});

let stringMap = arr.map(item => {
    return item + " " + item.length;
});

console.log("NumArr", numArr, numResult);
console.log("StringMap", stringMap);

let newObj = obj.map(item => {
    return `${item.name} (${item.id})`;
});

console.log(newObj);

let mapObj = obj.map(item => {
    return {
        pizdec : item.name,
        kapec : item.id
    }
});

console.log("Map OBJECT", mapObj);

let filter = obj.filter(item => {
    return item.age > 18;
});

console.log(filter);

let arrFilter = arr.filter(item => {
    return item.length > 5;
});

console.log(arrFilter);

let reduceCount = obj.reduce((sum, item) => {
    sum += item.id;
    return sum;
}, 0);

console.log(reduceCount);

let reduceNum = numArr.reduce((sum, item) => {
    sum += item;
    return sum;
});

console.log(reduceNum);