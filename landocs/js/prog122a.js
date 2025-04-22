function doMath() {
    let out = "Number&#8195&#8195Square&#8195&#8195Square Root<br>";
    let lcv = 1;
    while (lcv <= 50) {
        out += lcv;
        if (lcv < 10) {
            out += (lcv * lcv).toString().padStart(12, " ");
            out += Math.sqrt(lcv).toFixed(4).toString().padStart(11, " ") + "<br>";
        }
        else {
            out += (lcv * lcv).toString().padStart(11, " ");
            out += Math.sqrt(lcv).toFixed(4).toString().padStart(11, " ") + "<br>";
        }
        lcv++;
    }
    document.getElementById("output").innerHTML = out;
}