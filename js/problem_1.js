function sumOfMultipleOf3or5 (n) {
    let sum1 = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum1 += i;
        }
    }
    return {sum1};
}

console.log(sumOfMultipleOf3or5(1000));