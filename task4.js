debugger;
let name = progress([8, 2, 4]);

function progress(arr) {
    let arr = arr.sort();
    for (let i = 1; i < arr.length; i++) {

        if (Math.pow(arr[i], 2) !== arr[i - 1] * arr[i + 1]) {
            return false;
        }

    }

    return true;
}

let result = progress(arr);
console.log(result);