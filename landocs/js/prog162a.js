function f(n){
    if (n <= 1) return 1;
    return n * f(n - 1);
}
function doMath() {
    let n = Number(document.getElementById("num1").value);
    let tot = n;
    for (let lcv = n-1; lcv > 1; lcv--){
        tot *= lcv;
    }
    document.getElementById("output").innerHTML = "!" + n + " is " + tot.toString();
    // With recursion
    // document.getElementById("output").innerHTML = "!" + n + " is " + f(n).toString();

}

function reset() {
    document.getElementById('output').innerHTML = "";
    document.getElementById("num1").value = "";
}