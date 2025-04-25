function doMath() {
    let tot = 0;
    for (let lcv = 9669; lcv > 3; lcv-=3){
        tot += lcv;
    }
    document.getElementById("output").innerHTML = "The sum of the multiples of 3, from 3 to 9669 is " + tot.toString();
    // With recursion
    // document.getElementById("output").innerHTML = "The sum of the multiples of 3, from 3 to 9669 is " + f(9669).toString();
}

function reset() {
    document.getElementById('output').innerHTML = "";
}
function f(n){
    if (n <= 3) return 3;
    return n + f(n - 3);
}