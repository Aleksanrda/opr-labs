
let v1=v2 = 0;
let v3 = 1.5;

function getElementOfRow(n, v1, v2, v3) {
    if (n >= 4) {
        let v1 = f(n-1);
        let v2  = f(n-2);
        let v3 = f(n-3);
        return (n+1/Math(n,2)+1) *v1 - v2*v3
    }
    return 0;

}
alert(getElementOfRow(n, v1, v2, v3));