var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(23,83);
  speed = random(55,90);
  weight = random(400,1500);
 bullet=createSprite(50, 200, 50, 5);
 bullet.velocityX = speed;
 bullet.shapeColor=color(255);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapecolor = color(255);
}

function draw() {
  background(0);  

if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

function hascollided()
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}