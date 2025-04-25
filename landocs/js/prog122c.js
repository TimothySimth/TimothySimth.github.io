function doMath() {
    let out = "";
    for (let i = 2; i <= 10; i+=2) {
        out += i.toString().padStart(2, " ") + (i + 1).toString().padStart(5, " ") +  (i * 2).toString().padStart(5, " ") +  (i * i).toString().padStart(5, " ") + "\n";
    }
    document.getElementById("output").innerHTML = out;
}

function reset() {
    document.getElementById('output').innerHTML = "";
}