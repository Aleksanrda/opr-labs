// let number = 313;

function getInputNumber() {
    let number = parseInt(prompt('Enter your number:'))
    return number;
}

function getPalindrom(number) {
    let firstString = number.toString();
    let secondString = number.toString().split("").reverse().join("");

    if (firstString === firstString.substr(0) && firstString === secondString) {
        return "Number is a palindrome";
    }

    return "Number is not a palindrome";
}

let usersInput = getInputNumber();
let result = getPalindrom(usersInput)

alert(result);