
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8

function preload()
{
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	drop1= new Drop(100,30)
	drop2= new Drop(200, 30)
	drop3= new Drop(300, 30)
	drop4=new Drop(400, 30)
	drop5= new Drop(500, 30)
	drop6= new Drop(600, 30);
	drop7=new Drop(700, 30)
	drop8=new Drop(780, 30)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();
  drop5.display();
  drop6.display();
  drop7.display();
  drop8.display();
}



