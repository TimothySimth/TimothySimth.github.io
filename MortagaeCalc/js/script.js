function doMath() {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("interest rate").value) / 100;
    let t = Number(document.getElementById("numYears").value);
    let m = Number(document.getElementById("monPayment").value);
    let n = 12;
    let compoundFactor = Math.pow(1 + r / n, n * t);
    let b = p * compoundFactor;
    b -= (m * (compoundFactor-1)) / (r / n);

    let out = "";
    out += "Your remaining loan balance is: " + b.toFixed(2);
    document.getElementById("output").innerHTML = out;
}

function reset() {
    document.getElementById('output').innerHTML = "";
    document.getElementById('principal').value = "";
    document.getElementById('interest rate').value = "";
    document.getElementById('numYears').value = "";
    document.getElementById('monPayment').value = "";
}