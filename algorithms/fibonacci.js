// 1, 1, 2, 3, 5, 8, 13, 21, 34,

function fibonacci(num) {
    let wholeArr = [];
    let countArr = [1, 1];

    for(let i = 0; i < num; i++) {
        let newArr = countArr[0] + countArr[1];
        countArr.shift();
        countArr.push(newArr);
        console.log(countArr);

        wholeArr.push(newArr);
    }

    let string = wholeArr.join("/");

    return {
        string
    }
} 

console.log(fibonacci(20));