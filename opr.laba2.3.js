let number = 313;
function palindrom(number) {
    let firstString = number.toString().split("").reverse().join("");
    secondString = number.toString();

    if (secondString === secondString.substr(0) && secondString === firstString) {
        return number;
    }

    return undefined;
}
alert(palindrom(number));