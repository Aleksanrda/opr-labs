var x = 123;
x.toString()
var res = [];
var i = 0;

while(x > 0){
    var number = x % 10
    var x = parseInt(x / 10);
    res[i] = number
    i++
}

console.log(res);