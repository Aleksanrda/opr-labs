function getInputNumber() {
    let number = parseInt(prompt('Enter your number:'))
    return number;
}

function calculateSumOfPows(number) {
    let xsum = 0;
    let coef = 1;

    for (let numeric = 1; numeric <= number; numeric++) {
        xsum += coef * Math.pow(numeric, numeric);
        coef *= -1;
    }

    return xsum;
}

var usersInput = getInputNumber();
var result = calculateSumOfPows(usersInput);

alert(result);