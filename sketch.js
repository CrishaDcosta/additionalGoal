var block1, block2, block3, block4;
var ball
var softSound;


function preload(){
 
  softSound = loadSound("soft.mp3");

}

function setup() {
  createCanvas(800, 600);



  block1 = createSprite(100, 550, 192, 20);
  block1.shapeColor = "blue";
  block2 = createSprite(300, 550, 192, 20);
  block2.shapeColor = "orange";
  block3 = createSprite(500, 550, 192, 20);
  block3.shapeColor = "red";
  block4 = createSprite(700, 550, 192, 20);
  block4.shapeColor = "green";
  ball = createSprite  (500,300,40,40);

}



function draw() {
  background(0);
  ball.x = mouseX;
  ball.y = mouseY;


  if ( block1||block2||block3||block4.isTouching(ball)) {
    softSound.play();
    
  }
  

  if (block1.isTouching(ball)) {
    ball.shapeColor ="blue";
    ball.mouseX = 0;
    ball.mouseY = 0;
    softSound.stop() = false
  }
  
  if (block2.isTouching(ball)) {
    ball.shapeColor ="orange";
    ball.mouseX = 0;
    ball.mouseY = 0;
    softSound.stop();
    
    
  }
  if (block3.isTouching(ball)) {
    ball.shapeColor ="red";
    ball.mouseX = 0;
    ball.mouseY = 0;
    softSound.stop();
   
    
  }
  if (block4.isTouching(ball)) {
    ball.shapeColor ="green";
    ball.mouseX = 0;
    ball.mouseY = 0;
    softSound.stop();
   
    
  }
 


  drawSprites();
}

