//   Ex5.4 - To Weird Case
function toWeirdCase(string) {
    let newString = string.split(' ');
    for (let i = 0; i < newString.length; i++) {
        newString[i] = newString[i].weird();
    }
    return newString.join(' ');
}

String.prototype.weird = function () {   //Add method to string class
   let newString = '';
    for (let i = 0; i < this.length; i++) {
        newString += (i % 2 === 0) ? this[i].toUpperCase() : this[i].toLowerCase();
    }
    return newString;
}
// console.log(toWeirdCase("String"));//=> returns "StRiNg"
// console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"

