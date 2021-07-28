class Platform
{
    constructor(xPos) //A constructor() function constructs the values of an object
    {
        this.sptX = xPos;
        this.sptY = 650;
        this.sptW = random(200, 350);
        this.sptH = random([150, 300]);

        this.spt = createSprite(this.sptX, this.sptY, this.sptW, this.sptH);
        this.spt.shapeColor = "green";
        this.spt.addImage("ground", platformImage);
    }
};