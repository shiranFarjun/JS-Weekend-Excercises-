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
