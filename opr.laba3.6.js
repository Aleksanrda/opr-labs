debugger;

let romanNumerals = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
let number = "XXVI";
function getInteger(number, romanNumerals) {
    number = number.split("");
    let integer = 0;

    for (let i = 1; i < number.length; i++) {

        if (romanNumerals[number[i]] <= romanNumerals[number[i - 1]]) {
            integer += romanNumerals[number[i - 1]];
        }
        else {
            integer += romanNumerals[number[i]] - romanNumerals[number[i - 1]] - romanNumerals[number[i]];
        }
    }
    integer += romanNumerals[number[number.length - 1]]

    return integer;
}

alert(getInteger(number, romanNumerals))