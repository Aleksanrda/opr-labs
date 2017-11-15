// let number = 313;

function getInputNumber() {
    let number = parseInt(prompt('Enter your number:'))
    return number;
}

function getPalindrom(number) {
    let firstPalindromNumber = number;
    let secondPalindromNumber = number;
    let firstString = firstPalindromNumber.toString().split("");
    let secondString = secondPalindromNumber.toString().split("");

    if (isNaN(firstPalindromNumber)) {
        return undefined;
    }

    for (let i = 0; i < secondString.length / 2; i++) {
        [secondString[i], secondString[(secondString.length - 1) - i]] = [secondString[(secondString.length - 1) - i], secondString[i]]
    }

    for (let j = 0; j < firstString.length;) {
        if (firstString[j] === secondString[j]) {
            j++;
        }
        else {
            return "Number is not a palindrome";
        }
    }

    return "Number is  a palindrome";
}

let usersInput = getInputNumber();
let result = getPalindrom(usersInput)

alert(result);