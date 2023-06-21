const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, dragon, background
var gameState = "fight"

function preload() {
  backgroundImg = loadImage("./assets/background.jpg");
  dragonImage = loadImage("./assets/dragon.webp");
  enemyImg = loadImage("assets/enemy.png")
  fireballImg = loadImage("assets/fireball.png")
    
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    background.addImage(backgroundImg)
    background.scale = 1.1
      
    dragon = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   dragon.addImage(dragonImg)
      dragon.scale = 0.3
      dragon.debug = true
     dragon.setCollider("rectangle",0,0,300,300)
   

}



function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);



  
  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
 

}