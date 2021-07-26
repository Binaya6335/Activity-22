const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(600,50,1200,20,roof_options);
    World.add(world,roof);

	bob1 = new bob(300, 300, "royalblue");
	bob2 = new bob(360,300, "purple");
	bob3 = new bob(420, 300, "royalblue");
	bob4 = new bob(480, 300, "purple");
	bob5 = new bob(540, 300, "royalblue");
	rope1 = new Sling(bob1.body, {x:300, y:50}, "purple");
	rope2 = new Sling(bob2.body,{x:360, y:50}, "royalblue");
	rope3 = new Sling(bob3.body,{x:420, y:50}, "purple");
	rope4 = new Sling(bob4.body,{x:480, y:50}, "royalblue");
	rope5 = new Sling(bob5.body, {x:540, y:50}, "purple");
	  
	  Engine.run(engine);
	
  }

function draw() {
	rectMode(CENTER);
	background("turquoise");
	Engine.update(engine);
	fill("#910046");
	textSize(15);
	text("Drag the mouse on the first bob to relaunch", 275, 370);
	roof1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();
   
  }
  
  function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX,y:mouseY});
	}