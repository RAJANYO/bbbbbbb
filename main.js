img = "";
Status = "";
objects = []
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
    if (Status) {
        document.getElementById("status").innerHTML = "Status :  Objects detected";

        for (var i = 0; i < objects.length; i++) {


            fill("red")
            percent = floor(objects[i].confidence * 100);

            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15)
            noFill()
            stroke("red")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
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
