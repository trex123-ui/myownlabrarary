var game1
var game2


var object2, object1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 5
  game1 = createSprite(400,100,50,50)
  game1.shapeColor =  "red"
  game2 = createSprite (200,100,50,50)
  game2.shapeColor = "green"
  game1.velocityX = -5
}

function draw() {
  background(0,0,0);  
 bounceOff(game1,game2)
  console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.width/2+fixedRect.width/2)

  drawSprites();
}

