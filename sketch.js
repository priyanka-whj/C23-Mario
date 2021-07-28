
var platform, platformGroup;
var mario;
var wall;
var obstacle;
var marioAnimation, platformImage, wallImage, obstacleImage;

function preload()
{
  marioAnimation = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  platformImage = loadImage("images/ground.png");
  wallImage = loadImage("images/wall.png");
  obstacleImage = loadImage("images/obstacle1.png");
}

function setup() 
{
  createCanvas(displayWidth, 700);

  mario = new Player();
  platformGroup = new Group();

  var xDistance = 0;
  var gap;
  for(var i = 0; i<20; i++)
  {
    platform = new Platform(xDistance);
    platformGroup.add(platform.spt);
    gap = random(100, 150);
    xDistance = xDistance + platform.sptW + gap;

    if(i%3 === 0)
    {
      wall = new Wall(xDistance);
      platformGroup.add(wall.spt);
    }

    if(i%2 === 0)
    {
      obstacle = new Obstacle(xDistance);
    }
  }
}

function draw() 
{
  background('skyblue');
  
  translate(-mario.spt.x + width/2, 0);

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("right"))
  {
    mario.moveForward();
  }

  if(keyDown("left"))
  {
    mario.moveBackward();
  }

  if(keyDown("up") && mario.spt.velocityY === 0)
  {
    mario.jump();
  }

  drawSprites();
}










