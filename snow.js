class Snow {
    constructor(x,y,r) {
        var options ={}

        this.body = Bodies.circle(x,y,r);
        this.r = r;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,50);

     
    }

}