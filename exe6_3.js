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


