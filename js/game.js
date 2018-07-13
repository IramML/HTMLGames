var canvas;
var ctx;

var widthCanvas=400;
var heightCanvas=640;

function initialize(){
	canvas=document.getElementById('tetris-canvas');
	ctx=canvas.getContext('2d');
  	canvas.width=widthCanvas;
	canvas.height=heightCanvas;
}