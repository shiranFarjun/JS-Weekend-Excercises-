// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const YesNo = (boolean) => {
    return boolean?"Yes":"No";
}
console.log(YesNo(true));