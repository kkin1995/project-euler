function sumsquaredifference(n) {
    let sum1 = 0;
    for (let i = 1; i <= n; i++) {
        sum1 += Math.pow(i,2);
    }

    let sum2 = 0;
    for (let j = 1; j <= n; j++) {
        sum2 += j;
    }
    sum2 = Math.pow(sum2, 2);

    return sum2 - sum1;;
}

console.log(sumsquaredifference(10));
console.log(sumsquaredifference(100));