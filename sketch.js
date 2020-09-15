const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backround;
var ground;
var dustbin4;
var paper;

function preload(){
	backround = loadImage("Sprites/H.jpg");
}


function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	
	
	
	 ground = new Ground(690,60,11190,10);
	  paper = new Paper(1,4,10,90);
   dustbin2 = new Dustbin2(650,830,10,90);
   dustbin3 = new Dustbin3(50,830,10,90);
   dustbin4 = new Dustbin4(20,-290,10,90);
}

function draw() {
  rectMode(CENTER);
  background(backround);

     paper.display();
	 dustbin2.display();
	 dustbin4.display();
	 ground.display();
	 


drawSprites();
 
}

function keyPressed(){

if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:78,y:-59});
}
}