function f(n){
    if (n <= 1) return 1;
    return n * f(n - 1);
}
function doMath() {
    let n = Number(document.getElementById("num1"));
    document.getElementById("output").innerHTML = f(n).toString();

}

function reset() {
    document.getElementById('output').innerHTML = "";
    document.getElementById("num1").value = "";
}