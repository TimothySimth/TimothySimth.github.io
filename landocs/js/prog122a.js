function doMath() {
    let out = "Number&#8195&#8195Square&#8195&#8195Square Root<br>";
    for (let lcv = 1; lcv <= 50; lcv++) {
        out += lcv;
        if (lcv < 10) {
            out += (lcv * lcv).toString().padStart(12, " ");
            out += Math.sqrt(lcv).toFixed(3).toString().padStart(11, " ") + "<br>";
        }
        else {
            out += (lcv * lcv).toString().padStart(11, " ");
            out += Math.sqrt(lcv).toFixed(3).toString().padStart(11, " ") + "<br>";
        }
    }
    document.getElementById("output").innerHTML = out;
}