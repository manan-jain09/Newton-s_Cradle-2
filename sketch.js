const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5, bobDiameter;
var rope1, rope2, rope3, rope4, rope5;
var engine, world;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
    world = engine.world;

	bobDiameter = 0;

	roof = new Roof(width / 2, height / 2 - 200, width - 200 , 20);
	bob1 = new Bob(width / 2 - 240, height / 2 + 99, 120);
	bob2 = new Bob(width / 2 - 120, height / 2 + 99, 120);
	bob3 = new Bob(width / 2, height / 2 + 99, 120);
	bob4 = new Bob(width / 2 + 120 , height / 2 + 99, 120);
	bob5 = new Bob(width / 2 + 240 , height / 2 + 99, 120);
	
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter * 2 - 240, 0);
	rope2 = new Rope(bob2.body, roof.body,-bobDiameter * 1 - 120, 0);
	rope3 = new Rope(bob3.body, roof.body,0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter * 1 + 120, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter * 2 + 240, 0);


	
	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);

  drawSprites();

  rectMode(CENTER);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:900,y: -45});
	}
}

