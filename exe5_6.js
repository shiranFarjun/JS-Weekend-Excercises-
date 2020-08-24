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








