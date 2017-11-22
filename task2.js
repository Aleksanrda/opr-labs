

function getLongest(t) {
    let maxLengthWord = "";
    let length = -1;
    let text = t;
    text = text.split(" ");
    for (let i = 0; i < text.length; i++) {

        if (text[i].length > length) {
            length = text[i].length;
            maxLengthWord = text[i];
        }

    }
    return maxLengthWord;
}

let result = getLongest("Любовь в    большом городе");
console.log(result);