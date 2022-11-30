img = "";
Status = "";
function preload() {
    img = loadImage("drawing.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("red")
    // text("dog", 45, 75)
    noFill()
    stroke("red")
    // rect(30, 60, 450, 350)
}
function modelLoaded() {
    console.log("Model Loaded!");
    Status = true; objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    } console.log(results); objects = results;
}
