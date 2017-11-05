debugger;
function inputNumbers() {
    let numbers = [];
    for (let i = 0; i < 8; i++) {
        numbers[i] = parseInt(prompt('Enter your number:'));
    }
    return (numbers);
}

function positiveCountNumber() {
    let positiveCountNumber = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] >= 0) {
            positiveCountNumber++;
        }
    }
}



console.log(positiveCountNumber(inputNumbers()));


























