let string = "camel";
let character = "m";

function getPositionOfCharacter(string, character) {

    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }

    return 0;
}
alert(getPositionOfCharacter(string, character));