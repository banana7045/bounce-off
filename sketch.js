var movingRectangle
var movingRectangle2
function setup() {
createCanvas(800,1000);
movingRectangle = createSprite(400, 100, 50, 80);
movingRectangle.velocityY=5
movingRectangle2 = createSprite(400, 800, 80, 30)
movingRectangle2.velocityY=-5
}
function draw() {
  background(255,255,255); 
 if(movingRectangle.x-movingRectangle2.x < movingRectangle.width/2+movingRectangle2.width/2
 && movingRectangle2.x-movingRectangle.x < movingRectangle.width/2+movingRectangle2.width/2 ){
movingRectangle.velocityX=movingRectangle.velocityX*-1
movingRectangle2.velocityX=movingRectangle2.velocityX*-1

 }  if(movingRectangle.y-movingRectangle2.y < movingRectangle.width/2+movingRectangle2.width/2
  && movingRectangle2.y-movingRectangle.y < movingRectangle.width/2+movingRectangle2.width/2 ){
 movingRectangle.velocityY=movingRectangle.velocityY*-1
 movingRectangle2.velocityY=movingRectangle2.velocityY*-1
}  
  drawSprites();
}