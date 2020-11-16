
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobStartingX
var bobStartingY
var bobDiameter
var background1IMG
var newton, newtonIMG
var roof1
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1, rope2, rope3, rope4, rope5
var  s1, s2, s1IMG, s2IMG

function preload()
{
	background1IMG = loadImage("background.jpg")
	newtonIMG = loadImage("download.jfif")
	s1IMG = loadImage ("SpottedHoarseInvisiblerail-max-1mb.gif")
	s2IMG = loadImage ("source.gif")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   newton = createSprite(700, 620)
   newton.addImage(newtonIMG)
   newton.scale = 0.62

   s1 = createSprite(700, 400)
   s1.addImage(s1IMG)
   s1.scale = 0.3

   s2= createSprite(100, 200)
   s2.addImage(s2IMG)
   s2.scale = 0.3

   

	//Create the Bodies Here.

	bobStartingX = width/2
	bobStartingY = 500
	bobDiameter = 90
 
	roof1 = new Roof(400, 100, 700, 20)
	bobObject1 = new Bob(bobStartingX-bobDiameter*2, bobStartingY, bobDiameter)
	bobObject2 = new Bob(bobStartingX-bobDiameter, bobStartingY, bobDiameter)
	bobObject3 = new Bob(bobStartingX, bobStartingY, bobDiameter)
	bobObject4 = new Bob(bobStartingX+bobDiameter, bobStartingY, bobDiameter)
	bobObject5 = new Bob(bobStartingX+bobDiameter*2, bobStartingY, bobDiameter)

	rope1 = new Rope (bobObject1.body, roof1.body, -90*2, 0)
	rope2 = new Rope (bobObject2.body, roof1.body, -50*2, 0)
	rope3 = new Rope (bobObject3.body, roof1.body, 0, 0)
	rope4 = new Rope (bobObject4.body, roof1.body, 50*2, 0)
	rope5 = new Rope (bobObject5.body, roof1.body, 90*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background1IMG);
  
  drawSprites();
  textSize (60)
  fill ("black")
  textFont("Courier New");
  text("Newton's Cradle", 50, 620)

  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
		
       Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-45});
	}
}



