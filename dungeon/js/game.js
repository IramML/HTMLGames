var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var muro = '#044f14';
var puerta = '#3a1700';
var tierra = '#c6892f';
var llave = '#c6bc00';

var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
    [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
    [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
    [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
    [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
    [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
    [0,2,2,2,0,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,0,0,2,0,0,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
inicialize();


function dibujaEscenario(){
    var color;
  
    for(y=0;y<10;y++){
      for(x=0;x<15;x++){
  
        if(escenario[y][x]==0)
          color = muro;
  
        if(escenario[y][x]==1)
          color = puerta;
  
        if(escenario[y][x]==2)
          color = tierra;
  
        if(escenario[y][x]==3)
          color = llave;
  
        ctx.fillStyle = color;
        ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
      }
    }
  
  
}
function inicialize(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(function(){
      principal();
    },1000/FPS);
  }
  
function borraCanvas(){
    canvas.width=750;
    canvas.height=500;
}
function principal(){
    borraCanvas();
    dibujaEscenario();
}