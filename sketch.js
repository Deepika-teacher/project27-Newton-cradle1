
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,rope1;
var bob1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter=80;
	roof = new Roof(400,150,600,30);
	bob1=new bob(200,550);
	rope1=new Rope(bob1.bobBody,roof.body,-bobDiameter*2,0);

	bob2=new bob(280,550);
	rope2=new Rope(bob2.bobBody,roof.body,-bobDiameter*1,0);

	bob3=new bob(360,550);
	rope3=new Rope(bob3.bobBody,roof.body,0,0);

	bob4=new bob(440,550);
	rope4=new Rope(bob4.bobBody,roof.body,bobDiameter*1,0);

	bob5=new bob(520,550);
	rope5=new Rope(bob5.bobBody,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();
  
  bob4.display();
  rope4.display();
  
  bob5.display();
  rope5.display();
}

function keyPressed(){
	if(keyDown("up")){
		Body.applyForce(bob1.bobBody,bob1.bobBody.position,{x:-60,y:-50});
	}
}

