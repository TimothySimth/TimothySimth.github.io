function doMath() {
    let base = Number(document.getElementById("base").value);
    let height = Number(document.getElementById("height").value);
    let area = base * height / 2;
    let hypo = Math.sqrt(base**2 + height**2).toFixed(2);
    let perim = Number(base) + Number(height) + Number(hypo);
    let out = "";
    out += "Hypotenuse: " + hypo + "</br>";
    out += "Area: " + area + "</br>";
    out += "Perimeter: " + perim + "</br>";
    document.getElementById("output").innerHTML = out;
}