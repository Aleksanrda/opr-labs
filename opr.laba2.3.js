let number = 313;

function getPalindrom(number) {
    let firstString = number.toString();
    let secondString = number.toString().split("").reverse().join("");
    
    if (firstString === firstString.substr(0) && firstString === secondString) {
        return number;
    }

    return undefined;
}

alert(getPalindrom(number));