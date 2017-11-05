var numerator = [1, 2, 3, 4, 5, 6];
var denumerator = [2, 3, 4, 5, 6, 7];

function getFraction(numerator, denumerator) {
    let fraction = [];

    for (let i = 0; i < numerator.length; i++) {
        for (let j = 0; j < denumerator.length; j++) {
            let firstCheckNumeratorForAnInteger = Number.isInteger(numerator[i] / 2);
            let firstCheckDenumeratorForAnInteger = Number.isInteger(denumerator[j] / 2);
            let secondCheckNumeratorForAnInteger = Number.isInteger(numerator[i] / 3);
            let secondCheckDenumeratorForAnInteger = Number.isInteger(denumerator[j] / 3);

            if ((!firstCheckNumeratorForAnInteger || !firstCheckDenumeratorForAnInteger)
                && (!secondCheckNumeratorForAnInteger || !secondCheckDenumeratorForAnInteger)) {
                fraction.push(numerator[i] + "/" + denumerator[j]);
            }

        }

        denumerator.splice(0, 1)
    }

    return fraction;
}

let result = getFraction(numerator, denumerator);

alert(result);