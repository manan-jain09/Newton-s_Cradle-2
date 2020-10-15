class Bob{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        var paper_options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8,
        }
        this.body = Bodies.circle(this.x, this.y, this.r / 2, paper_options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill("white");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}