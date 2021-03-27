class Pentagon{
    constructor(x,y,){
        var options={
            'isStatic': true
        }

        this.body = Bodies.circle(50, 200, 20, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}