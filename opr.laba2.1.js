function name() {
    let arr = [];
    numerator = [1, 2, 3, 4, 5, 6];
    denumerator = [2, 3, 4, 5, 6, 7];
    for (let i = 0; i < numerator.length; i++) {
        for (let j = 0; j < denumerator.length; j++) {
            if (false == Number.isInteger(numerator[i] / denumerator[j])
                || (false == Number.isInteger(numerator / 2)
                    && false == Number.isInteger(denumerator / 2))) {
                arr.push(numerator[i] + "/" + denumerator[j]);
            }
        }
        denumerator.splice(0, 1)
    }
    return (arr);
}
alert(name());