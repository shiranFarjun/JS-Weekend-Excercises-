// Ex4.1 - Fibonacci -
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
//====> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function Fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}

console.log(Fibonacci(12));