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
    for (const [key, value] of Stops.entries()){
        people += key;
        people -=value;
    }
    return people;
}

console.log(inBus(mapStops));