//Ex5.1 - trimming string
//goal is to create a function that removes the first and last characters of a string.
let yourString = "/shiran/";
let result = yourString.slice(1, -1);

// console.log(result);


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

// console.log(repeatStr('Hello',6));

//Ex5.3 - To Camel Case
//  //option 1:             ***********************************************************************

//  function toCamelCase(text) {
//     text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
//     return text.substr(0, 1).toLowerCase() + text.substr(1);
// }


//option 2:
function toCamelCase(str) {
    // Lower cases the string
    return str.toLowerCase()
        // Replaces any - or _ characters with a space 
        .replace(/[-_]+/g, ' ')
        // Removes any non alphanumeric characters 
        .replace(/[^\w\s]/g, '')
        // Uppercases the first character in each group immediately following a space 
        // (delimited by spaces) 
        .replace(/ (.)/g, function ($1) { return $1.toUpperCase(); })
        // Removes spaces 
        .replace(/ /g, '');
}
// console.log(toCamelCase("The_Stealth_Warrior"));




//   Ex5.4 - To Weird Case
function toWeirdCase(string) {
    let newString = string.split(' ');
    for (let i = 0; i < newString.length; i++) {
        newString[i] = newString[i].weird();
    }
    return newString.join(' ');
}

String.prototype.weird = function () {   //Add method to string class
    var newString = '';
    for (let i = 0; i < this.length; i++) {
        newString += (i % 2 === 0) ? this[i].toUpperCase() : this[i].toLowerCase();
    }
    return newString;
}
// console.log(toWeirdCase("String"));//=> returns "StRiNg"
// console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"


//Ex5.5 - Abbreviate two words
function AbbreviateTwoWords(string) {
    let last = 0;
    for (let i in string) {
        if (string[i] === ' ') {
            last = i;
        }
    }
    return console.log(string.charAt(0).toUpperCase() + '.' + string.charAt(parseInt(last) + 1).toUpperCase());
}

// AbbreviateTwoWords('shiran Hazan');
// AbbreviateTwoWords('avior farjun');
// AbbreviateTwoWords('ofir farjun');



