let string = "мама мыла моркву, капусту";
string = string.split("");

function getHighestFrequencyOfLetters(string) {
    let highestFrequencyOfLetters = [];
    let maxCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " " && string[i] !== "." && string[i] !== ",") {
            let currentCount = 0;

            for (let j = 0; j < string.length; j++) {
                if (string[i] === string[j]) {
                    currentCount++;
                }
            }

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }

    }

    for (let n = 0; n < string.length; n++) {
        if (string[n] !== " " && string[n] !== "." && string[n] !== ",") {
            let currentCount = 0;

            for (let m = 0; m < string.length; m++) {
                if (string[n] === string[m]) {
                    currentCount++;
                }
            }

            if (currentCount === maxCount) {
                highestFrequencyOfLetters.push(string[n]);
                delete string[n];
            }
        }

    }

    return highestFrequencyOfLetters;
}

alert(getHighestFrequencyOfLetters(string));