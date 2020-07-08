// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

let n = 10;
let primes = [];

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    let upperLimit = Math.round(Math.sqrt(number))
    for (let i = 2; i <= upperLimit; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(n) {
    sum1 = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
            sum1 += i;
        }
    }
    return sum1;
}

console.log(sumPrimes(10));
console.log(sumPrimes(2e6));