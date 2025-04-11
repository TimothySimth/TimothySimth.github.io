function doMath() {
    let out = "Number&#8195&#8195Square&#8195&#8195Square Root<br>";
    for (let i = 1; i <= 50; i++) {
        out += i.toString() + "&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;";
        out += (i * i).toString() + "&#8195;&#8195;&#8195;&#8195;";
        out += Math.sqrt(i).toFixed(3).toString() + "<br>";
    }
    document.getElementById("output").innerHTML = out;
}