function useMapEndFilterAndForEach() {
    const num = [1, 2, 3, 4];
    const doubled = num.filter(x=> x%2===0).map(item => item * 2);
    doubled.forEach(element => {
        console.log(element);
    });
}
useMapEndFilterAndForEach() ;










// // Map
// // The map() method is used for creating a new array from an existing one, 
// // applying a function to each one of the elements of the first array.

// // Syntax
// // let new_array = arr.map(function callback(element, index, array) {
// //      Return value for new_array
// // }[, thisArg])

// const num = [1, 2, 3, 4];
// const doubled = num.map(item => item * 2);
// // console.log(doubled); // [2, 4, 6, 8]

// // Filter
// // The filter() method takes each element in an array and it applies a conditional statement against it. 
// // If this conditional returns true, the element gets pushed to the output array.
// //  If the condition returns false, the element does not get pushed to the output array.
// //let new_array = arr.filter(function callback(element, index, array) {
// //     // Return true or false
// // }[, thisArg])


// // exmple1: 
// const numbers3 = [1, 2, 3, 4];
// const evens = numbers3.filter(item => item % 2 === 0);
// // console.log(evens); // [2, 4]


// //exmple 2: 
// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
// ];

// const studentGrades = students.filter(student => student.grade >= 90);
// return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

// //  ******************     Reduce          **********************
// // The reduce() method reduces an array of values down to just one value. 
// //To get the output value, it runs a reducer function on each element of the array.
// // Syntax
// // // arr.reduce(callback[, initialValue])

// // Examples 1:
// // The following example adds every number together in an array of numbers.

// const numbers2 = [1, 2, 3, 4];
// const sum = numbers2.reduce(function (result, item) {
//     return result + item;
// }, 0);
// // console.log(sum); // 10

// //exmple 2

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function (obj, pet) {
//     if (!obj[pet]) {
//         console.log('obj[pet] : ' + obj[pet])
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts());

// /*
// Output:
//  { 
//     dog: 2, 
//     chicken: 3, 
//     cat: 1, 
//     rabbit: 1 
//  }
//  */





// //   ************* forEach ***********         not run
// function exmpleForEach() {
//     let languages = ['Python', 'Javascript', 'PHP', 'Golang'];

//     languages.forEach(element => {
//         console.log(element);
//     });
// }


// exmpleForEach();