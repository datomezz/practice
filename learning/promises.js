let num = 0;

console.log(num);

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num = 99);
    }, 2000);
});

a.then((messege) => {
    console.log(messege, "success");
}).catch((err) => {
    console.log(err, "error");
});

let number = 0;

console.log("X", number);

let x = new Promise((res, rej) => {
    setInterval(() => {
        number = Math.floor(Math.random() * 100);
        if(number < 10) {
            res(number);
        } else {
            rej(number);
        }
    }, 1500);
});

x.then((result) => {
    console.log("X", result);
}).catch((err) => {
    console.log("Error", err);
});

let z = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(alert);

console.log("Resolve", Promise.resolve("Hi").then(response => console.log(response)));
console.log("Reject", Promise.reject("pizdec").catch(response => console.log(response)));

//ASYNC & AWAIT

async function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(313), time);
    }); 

}

delay(1000).then(result => console.log(result, "delay"));


async function test() {
    let x = 0;
    console.log(x, "First")
    let y = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(x += 10), 2000);
    });
    return y;
}

test().then(result => console.log(result, "Second"));