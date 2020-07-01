let num = 0;

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