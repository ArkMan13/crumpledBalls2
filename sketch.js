
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObject;
var paperObject;
var groundObject;
var paperImage;
var dustbinImage;

function preload() {
  paperImage=loadImage("sprites/paper.png");
  dustbinImage=loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  dustbinObject.display();
  paperObject.display();
  groundObject.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}

function Images() {
	dustbin.loadImage(dustbinImage);
	paper.loadImage(paperImage)
}



