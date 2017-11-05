var x = 123;
x.toString()
var res = [];
var i = 0;

while(x > 0){
    var number = x % 10
    var x = parseInt(x / 10);
    res[i] = number
    i++
}

console.log(res);

// function inputNumbers() {
//     let numbers = [];
//     for (let i = 0; i < 8; i++) {
//         numbers[i] = parseInt(prompt('Enter your number:'));
//     }
//     return (numbers);
// }

// function positiveCountNumber() {
//     let positiveCountNumber = 0;
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[j] >= 0) {
//             positiveCountNumber++;
//         }
//     }
// }

// console.log(positiveCountNumber(inputNumbers()));
