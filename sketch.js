var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(200,400,20,20);
  rect2 = createSprite(400,200,40,40);
  
}

function draw() {
  background(0,0,0);  

rect1.x = mouseX
rect1.y = mouseY

if (isTouching(rect1,rect2)){
  rect1.shapeColor = "pink"
  rect2.shapeColor = "white"
}

  bounceOff(movingRect,fixedRect)
  drawSprites();
}

