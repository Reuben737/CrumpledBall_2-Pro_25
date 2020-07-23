
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper_1;
var dustbin_1,dustbin_1Image;
var ground;

function preload(){
	dustbin_1Image = loadImage("sprite/dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,300,800,20)
	paper_1= new Paper(100,150,20,50);
	dustbin_1=createSprite(400,300,100,20);
    dustbin_2=createSprite(350,260,20,100);
	dustbin_3=createSprite(450,260,20,100);

	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
 keyPressed(); 
  paper_1.display();
 ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.paper_1.applyForce(paper_1Object.paper_1Body,paper_1Object.paper_1Body.position,{x:85,y:-85});
   }
   }

