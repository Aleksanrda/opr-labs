let number = 857;

function findNumeric(number) {
    number = number.toString().split("");
    let a = 7;

    for (let i = 0; i < number.length; i++) {
        if (a == number[i]) {
            return a;
        }
    }

    return undefined;
}

alert(findNumeric(number));


