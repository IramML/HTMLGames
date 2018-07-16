var canvas;
var ctx;
var score;
var FPS=50;

var numScore=0;

var widthTable=10;
var heightTable=20;

var marginTop=4;

var widthB=40;
var heightB=40;

var widthCanvas=400;
var heightCanvas=640;

if(screen.width<950){
	//1.6 phone
	widthCanvas=250;
	heightCanvas=400;

	widthB=25;
	heightB=25;

}

//block colors
var colors=['#00F', '#0F0', '#F00', '#8404ed', '#FFD700', '#00CED1', '#FF8C00'];

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
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var tableEmpty=[
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
			[0,0,0,0]
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
			[0,0,0,0],
			[0,5,5,5], 
			[0,5,0,0],
			[0,0,0,0]
		],
		[
			[0,0,5,0],
			[0,0,5,0], 
			[0,0,5,5],
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
		this.delay=50
		this.frames=0;
		this.newBlock();
	}
	draw(){
		for(var pxY=0; pxY<4; pxY++){
			for (var pxX=0; pxX<4; pxX++) {
				if(graphicBlocks[this.typeBlock][this.angle][pxY][pxX]!=0){
					ctx.fillStyle=colors[this.typeBlock];
					ctx.fillRect((this.x+pxX-1)*widthB, (this.y+pxY-marginTop)*heightB, widthB, heightB);
				}
			}	
		} 

	}
	newBlock(){
		this.typeBlock=Math.floor(Math.random()*7);
		this.y=0;
		this.x=4;
	}
	rotate(){
		var tempAngle=this.angle;

		if (tempAngle<3)tempAngle++;
		else tempAngle=0;

		if(this.collition(tempAngle, this.y, this.x)==false)this.angle=tempAngle;
	}
	goDown(){
		if(!this.collition(this.angle, this.y+1, this.x)) this.y++;
	}
	right(){
		if(!this.collition(this.angle, this.y, this.x+1)) this.x++;
	}
	left(){
		if(!this.collition(this.angle, this.y, this.x-1)) this.x--;
	}
	fall(){
		if(this.frames<this.delay){
			this.frames++;
		}else{
			if(!this.collition(this.angle, this.y+1, this.x)){
				
				this.y++;
			}else{
				if(this.checkGameOver())this.resetTable();
				this.fixBlock();
				this.clearLine();
				this.newBlock();
			}
			this.frames=0;
		}
		
	}
	collition(tempAngle, tempY, tempX){
		var coll=false;
		for (var pxY=0; pxY<4; pxY++){
			for (var pxX=0; pxX<4; pxX++){
				if(graphicBlocks[this.typeBlock][tempAngle][pxY][pxX]>0){
					if(table[tempY+pxY][tempX+pxX]>0)coll=true;
				}
			}	
		}
		return coll;
	}
	fixBlock(){
		for(var pxY=0; pxY<4; pxY++){
			for(var pxX=0; pxX<=4; pxX++){
				if(graphicBlocks[this.typeBlock][this.angle][pxY][pxX]>0){
					table[this.y+pxY][this.x+pxX]=graphicBlocks[this.typeBlock][this.angle][pxY][pxX];
				}
			}
		}
	}
	checkGameOver(){
		var gameOver=false;
		for(var pxX=1; pxX<widthTable+1 && !gameOver; pxX++){
			if(table[2][pxX]>0){
				gameOver=true;
			}
		}
		return gameOver;
	}
	resetTable(){
		table=tableEmpty;
	}
	clearLine(){
		var positionY=[];
		for(var pxY=marginTop; pxY<heightTable; pxY++){
			var lineComplete=true;
			for(var pxX=1; pxX<=widthTable && lineComplete; pxX++){
				if(table[pxY][pxX]==0){
					lineComplete=false;
				}
			}
			if(lineComplete){
				numScore+=10;
				positionY.push(pxY);
				for(var pxX=1; pxX<=widthTable; pxX++){
					table[pxY][pxX]=0;

				}
			}
		}
		this.fallLine(positionY);
	}
	fallLine(positionsY){
		for(var falls=0; falls<positionsY.length; falls++){
			for(var pxY=positionsY[falls]; pxY>marginTop; pxY--){
				for(var pxX=1; pxX<=widthTable; pxX++){
					table[pxY][pxX]=table[pxY-1][pxX];
					table[pxY-1][pxX]=0;
				}
			}
		}
	}
}



if(screen.width<900){
	widthCanvas=250;
	heightCanvas=400;
}
var blocks;
function initialize(){
	canvas=document.getElementById('tetris-canvas');
	ctx=canvas.getContext('2d');
  	canvas.width=widthCanvas;
	canvas.height=heightCanvas;
	score=document.getElementById('score');
	blocks=new Blocks();
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
	blocks.fall();
	score.innerHTML="<strong>Score: </strong> "+numScore;
	blocks.draw();
	drawTable();
}
function drawTable(){
	for(var pxY=marginTop; pxY<=heightTable; pxY++){
		for (var pxX=1; pxX<=widthTable; pxX++) {
			if(table[pxY][pxX]!=0){
				ctx.fillStyle=colors[table[pxY][pxX]-1];
				ctx.fillRect((pxX-1)*widthB, (pxY-marginTop)*heightB, widthB, heightB);
			}
		}	
	}
}
function deleteCanvas(){
	canvas.width=widthCanvas;
	canvas.height=heightCanvas;
}
function action(act){
	switch(act){
		case 0:
			blocks.rotate();
			break;
		case 1:
			blocks.left();
			break;
		case 2:
			blocks.goDown();
			break;
		case 3:
			blocks.right();
			break;
	}
}