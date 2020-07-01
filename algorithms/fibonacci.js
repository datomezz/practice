function fibonacci(num) {
    let x = 0;

    for(let i = 1; i < num + 1; i++) {
        x = (i - 1) + (i -2 );
        console.log(`წინა = ${i}`, `წინისწინა = ${i-1}`, x);
    }
    return x;
} 

console.log(fibonacci(10));