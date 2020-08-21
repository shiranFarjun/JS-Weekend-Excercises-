// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array
// of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {
    a = Math.min.apply(Math, numbers);
    numbers.splice(a);
    b = Math.min.apply(Math, numbers);
    return (a + b)
}
sumTwoSmallestNumbers([19, 5, 42, 2, 77]);


// Ex2.2 - One and Zero - Binary 
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5


let binary = [1, 1, 1, 1];
let str = binary.join('');
console.log(parseInt(str, 2));

// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1
}
console.log(findNextSquare(625));
console.log(findNextSquare(121));
console.log(findNextSquare(114));


// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const allEqual = arr => {
    let num = 0;
    arr.forEach(element => {
        if (element !== arr[0]) {
            num += element;
        }
    });
    return num;
}
console.log(allEqual([0, 0, 0.55, 0, 0]))  // true

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

// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, 
//The second - from the year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.

function centuryFromYear(year) {
    return Math.floor((year - 1) / 100) + 1;
}

console.log(centuryFromYear(2000));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1705));


// Ex2.7 - Basic Math
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(op, left, right) {
    switch (op) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return left / right;
    }
}

console.log(' Ex2.7 - Basic Math');
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));       // Output: -3
console.log(basicOp('*', 5, 5));         // Output: 25

