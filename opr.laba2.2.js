let number = 857;
let numeric = 7;
function findNumeric(number, numeric) {
    number = number.toString();

    for (let i = 0; i < number.length; i++) {
        if (numeric == number[i]) {
            return numeric;
        }
    }

    return undefined;
}

alert(findNumeric(number, numeric));