var listaEsboco = ["cloud", "bat", "square", "line", "diamond"];
var randomNumber;
var sketch;
    
console.log(sketch);

var timerCounter = 0;

var timerCheck = "";

var drawSketch = ""

var answerHolder = "";

var score = 0;
var classifier;

function preload() {
     classifier = ml5.imageClassifier("DoodleNet")
}

function setup() {
    var canvas = createCanvas(280, 280);
    canvas.center();
    canvas.mouseReleased(classificarObjeto)

    randomNumber = Math.floor((Math.random() * listaEsboco.length));
    sketch = listaEsboco[randomNumber];
    
}
function draw() {

    document.getElementById("sketchParaDesenhar").innerHTML = "Esboço para ser desenhado: " + sketch;

    checkSketch();
    strokeWeight(13)
    stroke(0)
    
    
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function checkSketch() {
    timerCounter++;
    document.getElementById("time").innerHTML = timerCounter
    document.getElementById("time");
    console.log(timerCounter);
    if(timerCounter == 400) {
        timerCounter = 0
        timerCheck = "completed"
        document.getElementById("nomeEboco").innerHTML = ""
        updateCanvas();

        randomNumber = Math.floor((Math.random() * listaEsboco.length));
        sketch = listaEsboco[randomNumber];
    
    }
    if(timerCheck == "completed" || answerHolder  == "set") {
        timerCheck = ""
        answerHolder = ""
        updateCanvas();
        randomNumber = Math.floor((Math.random() * listaEsboco.length));
        sketch = listaEsboco[randomNumber];
    
    }
}
function updateCanvas() {
    background("white")
}

function classificarObjeto(){
    classifier.classify(canvas, gotResult)
}

function gotResult(error,Results) {
    if(error) {
        console.log("O desenho não foi reconhecido")
    }else {
    console.log(Results)
    var nome = Results[0].label;
    var presicao = Results[0].confidence;
    var multiplicacao = presicao * 100;
    var arrendondamento = Math.round(multiplicacao) + "%"
    document.getElementById("nomeEboco").innerHTML = nome
    document.getElementById ("precisao").innerHTML = arrendondamento

    if (nome == sketch) {
        answerHolder = "set";
        score++;
        document.getElementById("pont").innerHTML = score; 
        
        
    }
    
    
    // utterThis = new SpeechSynthesisUtterance(nome)
    // synth.speak(utterThis)
    }
}