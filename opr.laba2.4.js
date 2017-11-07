let number = 4564765;

function getCountOfNumeric(number) {
    let numeric = number.toString().split("");
    let countOfNumeric = numeric.length;
    let deleteNumeric = [];

    for (let i = 0; i < numeric.length; i++) {
        if (numeric[i] !== deleteNumeric[0]) {

            for (let j = 0; j < numeric.length; j++) {
                if (numeric[i] === numeric[j + i + 1]) {
                    delete numeric[j + i + 1];
                    countOfNumeric--;
                }

            }
        }

        delete numeric[i];
    }
    return countOfNumeric;
}

alert(getCountOfNumeric(number));