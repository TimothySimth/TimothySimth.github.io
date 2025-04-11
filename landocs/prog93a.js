function doMath() {
    let kwu = Number(document.getElementById("kwu").value);

    let base = kwu * 0.0475;
    let tax = base * 0.03;
    let surcharge = base * 0.1;
    let total = base + tax + surcharge;
    let late = total + (total * 0.04);
    let out = "";
    out += "Base Rate " + kwu + " @ $0.0475 $ " + base.toFixed(2) + "</br>";
    out += "Tax: $ " + tax.toFixed(2) + "</br>";
    out += "Surcharge: $ " + surcharge.toFixed(2) + "</br>";
    out += "Total: $ " + total.toFixed(2) + "</br>";
    out += "Late Fee: $ " + late.toFixed(2) + "</br>";
    document.getElementById("output").innerHTML = out;
    
}