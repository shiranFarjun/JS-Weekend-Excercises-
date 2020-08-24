// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.

const repeatStr = (str, times) => {
    let newStr = '';
    while (times !== 0) {
        newStr += str;
        times--;
    }
    return newStr;
}

console.log(repeatStr('Hello',6));
