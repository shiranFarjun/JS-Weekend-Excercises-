// Math In Story 
// Ex3.1 - Growth Of population 
// In a small town the population is p0 = 1000 at the beginning of a year. 
//The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
//How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.




function nbYear(numbers) {
	var p0 = parseInt(numbers[0]);
	var percent = parseInt(numbers[1]);
	var aug = parseInt(numbers[2]);
	var p = parseInt(numbers[3]);
	
	for (var y = 0; p0 < p; y++) {
    p0 += ((p0 * (percent / 100)) + aug);
  }
  
  return y + " years";
}

// console.log(nbYear(1500, 5, 100, 5000)); 
// console.log(nbYear(1500000, 2.5, 10000, 2000000));





// Ex3.2 - People on the Bus

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
var mapStops = new Map();
mapStops.set(10, 0);
mapStops.set(5, 3);
mapStops.set(4, 4);
mapStops.set(3, 8);
mapStops.set(0, 2);

const inBus = (Stops) =>{
    let people=0;
    for (let[key, value]  in Stops){
        people += key;
        people -=value;
    }
    return people;
}

console.log(inBus(mapStops));