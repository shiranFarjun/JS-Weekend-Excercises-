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
