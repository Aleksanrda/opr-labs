debugger;
let k = [[1, 2, 3], 4, [5, 4, [], 5], 6]

function flat(k) {
    let p;
    let arr = [];
    for (let i = 0; i < k.length; i++) {
        let p = k[i][0];
        for (let j = 0; j < k[i].length; j++) {
           
            arr.push(k[i][j]);
        }

    }
    return arr;
}

let result = flat(k);
console.log(result);