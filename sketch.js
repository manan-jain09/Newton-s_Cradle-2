const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var roof;
var bob1, bob2, bob3, bob4, bob5, bobDiameter;
var rope1, rope2, rope3, rope4, rope5;
var engine, world;
var mConstraint;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelratio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	bob1 = new Bob(width / 2 - 240, height / 2 + 45, 120);
	bob2 = new Bob(width / 2 - 120, height / 2 + 45, 120);
	bob3 = new Bob(width / 2, height / 2 + 45, 120);
	bob4 = new Bob(width / 2 + 120 , height / 2 + 45, 120);
	bob5 = new Bob(width / 2 + 240 , height / 2 + 45, 120);
	
	rope1 = new Rope(bob1.body, {x: width / 2 - 240, y: height / 2 - 150});
	rope2 = new Rope(bob2.body, {x: width / 2 - 120, y: height / 2 - 150});
	rope3 = new Rope(bob3.body, {x: width / 2 , y: height / 2 - 150});
	rope4 = new Rope(bob4.body, {x: width / 2 + 120, y: height / 2 - 150});
	rope5 = new Rope(bob5.body, {x: width / 2 + 240, y: height / 2 - 150});


	
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

  if(mConstraint.body){
	var pos = mConstraint.body.position;
	fill("green");
	ellipse(pos.x, pos.y, 120, 120);
  }
 
}

// function mouseDragged(){
// 	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
// 	Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-20,y: -100});
// }

