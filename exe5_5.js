//Ex5.5 - Abbreviate two words
function AbbreviateTwoWords(string) {
    let last = 0;
    for (let i in string) {
        if (string[i] === ' ') {
            last = i;
        }
    }
    return console.log(string.charAt(0).toUpperCase() + '.' + string.charAt(parseInt(last) + 1).toUpperCase());
}

AbbreviateTwoWords('shiran Hazan');
AbbreviateTwoWords('avior farjun');
AbbreviateTwoWords('ofir farjun');
