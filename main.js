var listaEsboco = ["barco", "ambulância", "relógio", "anjo", "avião"];
var randomNumber = Math.floor((Math.random() * listaEsboco.length));

var sketch = listaEsboco[randomNumber];

document.getElementById("sketchParaDesenhar").innerHTML = "Esboço para ser desenhado: " + sketch;

console.log(sketch);

var timerCounter = 0;

var timerCheck = "";

var drawSketch = "";

var answerHolder = "";

var score = 0;

function setup() {
    var canvas = createCanvas(280, 280);
    canvas.center();

}
function draw() {
    checkSketch();
    if (drawSketch == sketch) {
        answerHolder = "set";
        score++;
        document.getElementById("pont").innerHTML = score
    }
}
function checkSketch() {
    timerCounter++;
    document.getElementById("time");
    console.log(timerCounter);
    if(timerCounter == 400) {
        timerCounter = 0
        timerCheck = "completed"
    }
    if(timerCheck == "completed" || answerHolder  == "set") {
        timerCheck = ""
        answerHolder = ""
        updateCanvas()
    }
}
function updateCanvas() {

}