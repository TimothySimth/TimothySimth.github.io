function doMath() {
    let p =                 document.getElementById("principal").value;
    let r = (Number(document.getElementById("interest rate").value));
    let t = (Number(document.getElementById("numYears").value));
    let m =                 document.getElementById("monPayment").value;
    let n = 12;
    let b = 0.0;
    let rDIVn = r/n;
    let nTIMESt = n*t;
    let topThing = m(((1 + rDIVn*t)**nTIMESt)-1);
    b = (p((1+rDIVn)**nTIMESt)) - (topThing / rDIVn);

    let out = "";
    out += "Your remaining loan balance is: " + b.toFixed(2);
    document.getElementById("output").innerHTML = out;
}