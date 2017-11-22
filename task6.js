let name = sameLetters("Болб ппрп порпрь пара крлрк")

function sameLetters(s) {
    let arrOfSameLetters = [];
    let string = s;
    string = string.split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].split("");
        for (let j = 0; j < string[i].length; j++) {
            if (string[i][j] === string[i][string[i].length - 1]) {
                arrOfSameLetters = string[i].join();
            }
        }
    }
    return arrOfSameLetters;
}
let result = sameLetters(s);

console.log(result);