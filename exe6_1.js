

// Ex6.1 - Mumbling   
// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.toLowerCase()
        .split('')
        .map((char, idx) => `${char.toUpperCase()}${char.repeat(idx)}`)
        .join('-');
}


//Examples:
// console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));//-> "C-Ww-Aaa-Tttt"