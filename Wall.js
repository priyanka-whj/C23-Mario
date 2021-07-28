class Wall
{
    constructor(xPos) //A constructor() function constructs the values of an object
    {
        this.sptX = xPos;
        this.sptY = height - random([550, 350]);
        this.spt = createSprite(this.sptX, this.sptY);
        this.spt.addImage("wall", wallImage);
        this.spt.scale = 0.09;
    }
};