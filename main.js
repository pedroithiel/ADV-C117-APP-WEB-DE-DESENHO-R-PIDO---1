var listaEsboco=["barco", "ambulância", "relógio", "anjo", "avião"];
var randomNumber  =  Math.floor((Math.random() *listaEsboco.length));

var sketch = listaEsboco[randomNumber];

document.getElementById("sketchParaDesenhar").innerHTML = "Esboço para ser desenhado: " + sketch;

console.log(sketch);

var timerCounter = 0;

var timerCheck = "";

var drawSketch = "";

var answerHolder = "";

 var score = 0;