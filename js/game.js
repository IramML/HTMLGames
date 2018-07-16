var canvas;
var ctx;
var FPS=50;

var widthTable=10;
var heightTable=16;

var widthB=40;
var heightB=40;
var table=[
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];
var graphicBlocks=[
	[	//Block 1
		[
			[0,0,0,0],
			[0,1,1,0], 
			[0,1,1,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,1,1,0], 
			[0,1,1,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,1,1,0], 
			[0,1,1,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,1,1,0], 
			[0,1,1,0],
			[0,0,0,0]
		]
	],
	[	//Block 2
		[
			[0,0,0,0],
			[2,2,2,2], 
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,0,2,0],
			[0,0,2,0], 
			[0,0,2,0],
			[0,0,2,0]
		],
		[
			[0,0,0,0],
			[2,2,2,2], 
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,0,2,0],
			[0,0,2,0], 
			[0,0,2,0],
			[0,0,2,0]
		]
	],
	[	//Block 3
		[
			[0,0,0,0],
			[0,0,3,3], 
			[0,3,3,0],
			[0,0,0,0]
		],
		[
			[0,0,3,0],
			[0,0,3,3], 
			[0,0,0,3],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,0,3,3], 
			[0,3,3,0],
			[0,0,0,0]
		],
		[
			[0,0,3,0],
			[0,0,3,3], 
			[0,0,0,3],
			[0,0,0,3]
		]
	],
	[	//Block 4
		[
			[0,0,0,0],
			[0,4,4,0], 
			[0,0,4,4],
			[0,0,0,0]
		],
		[
			[0,0,0,4],
			[0,0,4,4], 
			[0,0,4,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,4,4,0], 
			[0,0,4,4],
			[0,0,0,0]
		],
		[
			[0,0,0,4],
			[0,0,4,4], 
			[0,0,4,0],
			[0,0,0,0]
		]
	],
	[	//Block 5
		[
			[0,0,5,0],
			[0,0,5,0], 
			[0,0,5,5],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,5,5,5], 
			[0,5,0,0],
			[0,0,0,0]
		],
		[
			[0,0,0,5],
			[0,5,5,5], 
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,5,5,0],
			[0,0,5,0], 
			[0,0,5,0],
			[0,0,0,0]
		]
	],
	[	//Block 6
		[
			[0,0,0,0],
			[0,6,6,6], 
			[0,0,0,6],
			[0,0,0,0]
		],
		[
			[0,0,6,6],
			[0,0,6,0], 
			[0,0,6,0],
			[0,0,0,0]
		],
		[
			[0,6,0,0],
			[0,6,6,6], 
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,0,6,0],
			[0,0,6,0], 
			[0,6,6,0],
			[0,0,0,0]
		]
	],
	[	//Block 7
		[
			[0,0,0,0],
			[0,7,7,7], 
			[0,0,7,0],
			[0,0,0,0]
		],
		[
			[0,0,7,0],
			[0,0,7,7], 
			[0,0,7,0],
			[0,0,0,0]
		],
		[
			[0,0,7,0],
			[0,7,7,7], 
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,0,7,0],
			[0,7,7,0], 
			[0,0,7,0],
			[0,0,0,0]
		]
	]
	
];

class Blocks{
	constructor(){
		this.x=1;
		this.y=1;
		this.angle=0;
		this.typeBlock=1;
	}
	draw(){
		for(var pxY=0; pxY<4; pxY++){
			for (var pxX=0; pxX<4; pxX++) {
				if(graphicBlocks[this.typeBlock][this.angle][pxY][pxX]!=0){
					ctx.fillStyle="#F00";
					ctx.fillRect((this.x+pxX)*widthB, (this.y+pxY)*heightB, widthB, heightB);
				}
			}	
		}
	}
	rotate(){
		console.log("rotar");
	}
	goDown(){
		console.log("GoDown");
	}
	right(){
		console.log("right");
	}
	left(){
		console.log("left");
	}
}









var widthCanvas=400;
var heightCanvas=640;

var blocks=new Blocks();

function initialize(){
	canvas=document.getElementById('tetris-canvas');
	ctx=canvas.getContext('2d');
  	canvas.width=widthCanvas;
	canvas.height=heightCanvas;

	setInterval(function(){main();}, 1000/FPS);
	initializeKeyboard();
}
function initializeKeyboard(){
	document.addEventListener('keydown', function (key) {
		if(key.keyCode==38){
			blocks.rotate();
		}
		if(key.keyCode==40){
			blocks.goDown();
		}
		if(key.keyCode==37){
			blocks.left();
		}
		if(key.keyCode==39){
			blocks.right();
		}
	});
}
function main(){
	deleteCanvas();
	blocks.draw();
}
function deleteCanvas(){
	canvas.width=widthCanvas;
	canvas.height=heightCanvas;
}


