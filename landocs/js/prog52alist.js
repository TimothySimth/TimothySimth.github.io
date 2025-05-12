function randInt(min, max) {
    return Math.round(Math.random() * (max)) + min;
}

function getAreaAndPerim(length, width) {
    return [(length * width), ((length + width) * 2)];
}

