//Ex5.3 - To Camel Case


function toCamelCase(str) {
   const delimiter = str.includes('-') ?'-':'_';
   let strArray=str.split(delimiter);
   console.log(strArray);
   return strArray.map(word=> {
       if (word===strArray[0]){
           return word;
       }
       return word[0].toUpperCase() + word.substring(1);
   }).join('');
}
console.log(toCamelCase("The_Stealth_Warrior"));

