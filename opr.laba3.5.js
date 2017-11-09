debugger;
let firstString = "март";
let secondString = "брам";
let character = "a";

function getNewString(firstString, secondString, character) {
    t = secondString;
    
    for (let i = 0; i < t.length; i++) {
        
        let n = t[i];
        if (n !== character) {
            firstString = firstString + t[i];
        }
        else {
            return firstString;
        }
    }

    return firstString;
}

alert(getNewString(firstString, secondString, character));