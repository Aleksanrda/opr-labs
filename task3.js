debugger;
let commas = getCommas(".gkuh.kh.iyh.")

function getCommas(s) {
    let string = s;
    let firstPosition = string.indexOf(".");
    let secondPosition = string.lastIndexOf(".");


    string = string.replace(/./g, ",").split("");
    for (let i = 0; i < string.length; i++) {

        if (firstPosition === i || secondPosition === i) {
            string.replace(".", ",")
        }

    }
    return string.join();
}

console.log(getCommas(s));