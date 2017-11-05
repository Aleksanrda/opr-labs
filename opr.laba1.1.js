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

let usersInput = getInputNumbers();
let result = getPositiveCountNumber(usersInput);

console.log(result);
