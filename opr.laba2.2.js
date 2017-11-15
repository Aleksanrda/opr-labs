function getInputnumeric() {
    let inputNumeric = parseInt(prompt('Enter your numeric:'))
    return inputNumeric;
}

function getInputNumber() {
    let inputNumber = parseInt(prompt('Enter your number:'))
    return inputNumber;
}

function findNumeric(inputNumber, inputNumeric) {
    let number = inputNumber;
    number = number.toString();
    let numeric = inputNumeric;

    for (let i = 0; i < number.length; i++) {
        if (numeric == number[i]) {
            return "Find numeric is " + numeric;
        }
    }

    return undefined;
}

let firstUsersInput = getInputNumber();
let secondUsersInput = getInputnumeric();
let result = findNumeric(firstUsersInput, secondUsersInput);

alert(result);