//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(number) {
    return number == number.toString().split('').reverse().join('');
}

let number = 9009;
console.log(checkPalindrome(number));

let minimum = 100;
let maximum = 999;
let palindromes = [];

for (let x = maximum; x >= minimum; x--) {
    for (let y = maximum; y >= minimum; y--) {
        if (checkPalindrome(x*y)) {
            palindromes.push([x*y, x, y]);
        }
    }
}

let largestPalindrome = [0,0,0];


for (let index = 0; index < palindromes.length; index++) {
    if (palindromes[index][0] > largestPalindrome[0]) {
        largestPalindrome[0] = palindromes[index][0];
        largestPalindrome[1] = palindromes[index][1];
        largestPalindrome[2] = palindromes[index][2];        
    }
}

console.log(largestPalindrome[0]);
console.log(largestPalindrome[1]);
console.log(largestPalindrome[2]);