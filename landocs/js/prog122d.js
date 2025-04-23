function doMath() {
    let out = "X            Y\n";
    for (let i = -12; i <= 16; i++) {
        out += i.toString().padStart(3, " ") +
            (Math.pow(i,6)-
                (3*(Math.pow(i,5)))-
                (93*(Math.pow(i,4)))+
                (87*(Math.pow(i,3)))+
                (1596*(Math.pow(i,2)))-
                (1380*i)-2800).toString().padStart(18, " ") + "\n";
    }
    document.getElementById("output").innerHTML = out;
}