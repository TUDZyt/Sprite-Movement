var randomobject
function setup() {
  createCanvas(1400,600);
  randomobject = createSprite(700, 300, 100, 100)
}
function draw() 
{
  background("black");
  if (keyDown("right")){
    randomobject.x = randomobject.x + 5
  }
  if (keyDown("left")){
    randomobject.x = randomobject.x - 5
  }
  if (keyDown("down")){
    randomobject.y = randomobject.y + 5
  }
  if (keyDown("up")){
    randomobject.y = randomobject.y - 5
  }
  drawSprites()

}




