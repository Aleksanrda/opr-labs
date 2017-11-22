debugger;
let n = 132;
let name = maxima(132);

function maxima(n) {
    let number = n;
    number = number.split("").sort().reverse();
    return number;
}

let result = maxima(n);
console.log(result);