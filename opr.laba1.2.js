debugger;

function inputNumber() {
    let number = parseInt(prompt('Enter your number:'))
    return number;
}

function calculateSumOfPows() {
    let xsum = 0;
    let coef = 1;

    for (let numeric = 1; numeric <= number; numeric++) {
        xsum += coef * Math.pow(numeric, numeric);
        coef *= -1;
    }

    return xsum;
}

alert(calculateSumOfPows(inputNumber()));