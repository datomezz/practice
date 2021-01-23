const obj = {
  name : "David",
  surname : "Mezz",
  address : {
    city : "Tbilisi",
    region : "Isani-Samgori"
  }
}

const obj1 = {
  surname : "Megg",
  adress : {
    city : "Tbilisi",
    region : "Marjanishvili"
  }
}

const arr = ["A", "B", "C", "D", "E", "F", "G"];
const arrTwo = ["1", "2", "3", "4", "5"];

const {name : saxeli, surname : gvari, address : {city : qalaqi, region : ubani}} = obj;
const [yleo, shen, ...raghaca] = arr;

const newArr = [...arr, ...arrTwo];
const newObj = {...obj, ...obj1};

let [a,b,c,d,e,f,g,other = "Other"] = arr;

console.log('arr', other); // Other

other = "not other";

console.log(other);
console.log(newObj);