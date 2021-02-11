var helicopterIMG, helicopterSprite, bulletSprite,bulletIMG;
var bulletBody,ground, enemy1, enemy1Img, enemy2, enemy2Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	bulletIMG=loadImage("grenade.png")
	enemy1Img=loadImage("enemy1.png")
	enemy2Img= loadImage("enemy2.png")
	expImg=loadImage("e.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

	enemy1=createSprite(700, 620, 200, 20);
	enemy1.addImage(enemy1Img);
	enemy1.scale=0.09
	enemy2=createSprite(300, 600, 20, 120);
	enemy2.addImage(enemy2Img);
	enemy2.scale=0.09
	enemy1=createSprite(900, 620, 200, 20);
	enemy1.addImage(enemy1Img);
	enemy1.scale=0.09
	enemy2=createSprite(150, 600, 20, 120);
	enemy2.addImage(enemy2Img);
	enemy2.scale=0.09

	// bulletSprite.addImage(bulletIMG)
	// bulletSprite.scale=0.07

	helicopterSprite=createSprite(50, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	bulletSprite=createSprite(width/2, 30, 10,10);
	bulletSprite.addImage(bulletIMG)
	bulletSprite.scale=0.07
	bulletSprite.visibility=false;

	engine = Engine.create();
	world = engine.world;

	bulletBody = Bodies.circle(width/2, 200 , 5, {isStatic:true});
	World.add(world, bulletBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bulletSprite.x= bulletBody.position.x 
  bulletSprite.y= bulletBody.position.y 
  drawSprites();
  if (helicopterSprite.x=width/2){
	  bulletSprite.visibility=true;
	  enemy1.Visible = enemy1.Visible - 5;
     tint(255,enemy1.Visiblity);
     
  }
   if (bulletSprite.y>=600 && bulletSprite.position.y>=600){
	exp=createSprite(bulletSprite.x, 600, 10,10);
	exp.addImage(expImg);
   }

}
function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the bullet body fall only on press of the Down arrow key.
	Matter.Body.setStatic(bulletBody, false);
	
    
  }

if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the bullet body fall only on press of the Down arrow key.
	helicopterSprite.x+=20
    
  }
  if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the bullet body fall only on press of the Down arrow key.
	helicopterSprite.x-=20
    
  }

}

