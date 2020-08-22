// Ex5.6 - Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// // "What was the name of your first pet?"

function maskify(str) {
    let x = str.length;
    let output = "";
    for (let i = 0; i < x - 4; i++) {
        output += "#";
    }
    return output + str.substring(x - 4, x);

}


//Examples
// console.log(maskify("4556364607935616"));
// console.log(maskify("64607935616"));
// console.log(maskify("1"));
// console.log(maskify(""));
// console.log(maskify("Skippy"));
// console.log(maskify("Nananananananananananananananana Batman!\n"));

const findShort = str => Math.min(...str.split(' ').map(x => x.length));

// console.log(findShort("The quick brown fox ju map"));


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


// Ex6.2 - Counting Duplicates 

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let result = 0;
    soltingObject = {};
    text.toLowerCase().split('').map(str => {
        if (!soltingObject.hasOwnProperty(str)) {
            soltingObject[str] = 0;
        } else {
            if (soltingObject[str] === 0) {
                result += 1;
            }
            soltingObject[str] = soltingObject[str] + 1;
        }
    });
    return result;
}

console.log(duplicateCount('abcde'));   //no characters repeats more than once
console.log(duplicateCount('aabBcde'));   //'a' occurs twice and ‘b' twice ('b' and ‘B’)
console.log(duplicateCount('Indivisibilities'));  //'i' occurs seven times and ‘s' occurs twice




// Ex6.3 - organize strings             ****************************************************learn again

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    var newStr = s1.concat(s2);
    var longestCharArr = unique(newStr).split("").sort();
    
    return longestCharArr.join("");
  }
  
  function unique(str) {
    var result = "";
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) == -1) {
        result += str[i];
      }
    }
    return result;
  }




//   Ex6.4 - isogram   ********************** not good solution

// An isogram is a word that has no repeating letters, 
//consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
    let i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }

 //********   More soulotion  */
 function is_isogram(s){
    let a = s.toLowerCase().split("")
    return a.filter((char, index) => a.indexOf(char) !== index).length === 0
}


// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


