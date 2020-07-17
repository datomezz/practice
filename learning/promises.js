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