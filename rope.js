class Rope{
    constructor(body1, body2, offSetX, offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offSetX, y: this.offSetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x + this.offSetX;
        var anchor2y = pointB.y + this.offSetY;
        strokeWeight(4);
        line(anchor1x, anchor1y, anchor2x, anchor2y);
    }
}