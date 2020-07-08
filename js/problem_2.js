function sumOfFibonacciEven (n) {
    let x = 1;
    let y = 2;
    let sum1 = 0;

    while (x < n) {
        x = y;
        y = x + y;
        if (x % 2 === 0) {
            sum1 += x;
        }
    }
    return {sum1};
}

console.log(sumOfFibonacciEven(4e6));