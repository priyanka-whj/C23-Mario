class Obstacle
{
    constructor(xPos) //A constructor() function constructs the values of an object
    {
        this.sptX = xPos;
        this.sptY = height - random([650, 450, 250]);
        this.spt = createSprite(this.sptX, this.sptY);
        this.spt.addImage("obstacle", obstacleImage);
        this.spt.scale = 0.03;
        this.spt.velocityX = -3;
    }
};