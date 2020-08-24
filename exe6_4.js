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

function is_isogram(s) {
  let a = s.toLowerCase().split("")
  return a.filter((char, index) => {
    return a.indexOf(char) !== index
  }).length === 0

}

is_isogram('shirans');


// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


