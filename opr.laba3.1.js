debugger;
let numbers = [6, 3, 0, 1, 0, 8];


function getSortNumbers(numbers) {
    let sortNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
            sortNumbers.push(numbers[i]);
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === 0) {
            sortNumbers.push(numbers[j]);
        }
    }

    for (let t = 0; t < numbers.length; t++) {
        if (numbers[t] % 2 !== 0 && numbers[t] !== 0) {
            sortNumbers.push(numbers[t]);
        }
    }

    return sortNumbers;
}

alert(getSortNumbers(numbers));