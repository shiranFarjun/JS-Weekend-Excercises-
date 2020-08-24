// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const allEqual = arr => {
    let num = 0;
    arr.forEach(element => {
        if (element !== arr[0]) {
            num += element;
        }
    });
    return num;
}
console.log(allEqual([0, 0, 0.55, 0, 0]))  // true
