// function getInputNumbers() {
//     let numbers = [];

//     for (let i = 0; i < 8; i++) {
//         numbers[i] = parseInt(prompt('Enter your number:'));
//     }

//     return numbers;
// }

var x = [1, 3, 5, 8, 9];
var y = [1, 2, 3, 4, 5];
function getConnectingArray(x, y) {
    let z = [];

    for (let i = 0; i < x.length; i++) {
        z.push(x[i]);
    }

    for (let j = 0; j < y.length; j++) {
        z.push(y[j]);
    }

    return z.sort();
}
alert(getConnectingArray(x, y));