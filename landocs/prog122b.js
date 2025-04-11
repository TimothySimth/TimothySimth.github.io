function doMath() {
    let out = "Hours&#8195&#8195&#8195&#8195&#8195Pay" + "<br>";
    for (let lcv = 1; lcv <= 50; lcv++) {
        out += lcv;
        if (lcv < 10) {
            out += (lcv * 4).toString().padStart(12, " ") + "<br>";
        }
        else {
            out += (lcv * lcv).toString().padStart(11, " ") + "<br>";
        }
    }
    document.getElementById("output").innerHTML = out;
}