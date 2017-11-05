function getInputNumbers() {
    let numbers = [];

    for (let i = 0; i < 8; i++) {
        numbers[i] = parseInt(prompt('Enter your number:'));
    }

    return numbers;
}

function getPositiveCountNumber(numbers) {
    let positiveCountNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveCountNumber++;
        }
    }

    return positiveCountNumber;
}

var usersInput = getInputNumbers();
var result = getPositiveCountNumber(usersInput);

alert(result);
