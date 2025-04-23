function doMath() {
    let out = "Number      Square      Square Root      Cube      4th Root\n";
    for (let i = 1; i < 21; i++) {
        out += i.toString().padStart(2, " ") +
            (Math.pow(i,2)).toString().padStart(16, " ")  +
            (Math.pow(i, (1/2))).toFixed(4).toString().padStart(16, " ")+
            (Math.pow(i,3)).toString().padStart(11, " ")  +
            (Math.pow(i, (1/4))).toFixed(4).toString().padStart(14, " ")+ "\n";
    }
    document.getElementById("output").innerHTML = out;
}