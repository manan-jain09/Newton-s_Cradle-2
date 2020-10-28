class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 220,
        }
        this.pointB = pointB;
        this.pointX = body1.x;
        this.pointY = body1.y + 250;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
        }
    }
}