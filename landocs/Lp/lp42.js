function solve() {
    let width = Number(document.getElementById("width").value);
    let length = Number(document.getElementById("length").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    let size = length * width * height;

    let out = ""

    if (size <= 100000) {
        if (weight < 27){
            out += ("Your Package is accpted");
        }
        out += ("Your Package is to Heavy");

    }
    else if (weight < 27) {
        out += ("Your Package is to Big");
    }
    else {
        out += ("Your Package is To Heavy and to Big");
    }
    document.getElementById("out").innerHTML = out;
}