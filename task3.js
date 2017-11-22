debugger;
let commas = getCommas(".gkuh.kh.iyh.")

function getCommas(s) {
    let string = s;
    string = string.split("");
    let firstPosition = string.indexOf(".");
    let secondPosition = string.lastIndexOf(".");
    for (let i = 0; i < string.length; i++) {


        if (string[i] == "." && firstPosition !== i && secondPosition !== i) {
            string = string.replace(".", ",")
        }

    }
    return string.join();
}

console.log(getCommas(s));