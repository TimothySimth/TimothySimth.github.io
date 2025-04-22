function doMath() {
    let out = "Hours&#8195&#8195&#8195&#8195&#8195Pay" + "<br>";
    let lcv = 1;
    while (lcv <= 40) {
        out += lcv;
        if (lcv < 10) {
            out += (lcv * 4).toString().padStart(12, " ") + "<br>";
        }
        else {
            out += (lcv * lcv).toString().padStart(11, " ") + "<br>";
        }
        lcv++;
    }
    document.getElementById("output").innerHTML = out;
}