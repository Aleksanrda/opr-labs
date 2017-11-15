// let number = 857;
// let numeric = 7;

function getInputnumeric() {
    let numeric = parseInt(prompt('Enter your numeric:'))
    return numeric;
}

function getInputNumber() {
    let number = parseInt(prompt('Enter your number:'))
    return number;
}

function findNumeric(number, numeric) {
    number = number.toString();

    for (let i = 0; i < number.length; i++) {
        if (numeric == number[i]) {
            return "Find numeric is " + numeric;
        }
    }

    return undefined;
}

var firstUsersInput = getInputNumber();
var secondUsersInput = getInputnumeric();
var result = findNumeric(firstUsersInput, secondUsersInput);

alert(result);