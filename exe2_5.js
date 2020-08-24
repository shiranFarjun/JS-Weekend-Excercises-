// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

function summation(numbers) {
    let total = 0;
    for (let i = 1; i <= numbers; i++) {
        total += i;
    }
    return total;
}
console.log(summation(5));
console.log(summation(36));