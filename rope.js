class Rope{

    constructor(body1,body2,x_offset,y_offset){
        var options={
            bodyA : body1,
            bodyB : body2,
            pointB :{x:x_offset,y:y_offset},
 
        };
        this.body=Constraint.create(options);
        World.add(world,this.body);

        this.x_offset=x_offset;
        this.y_offset=y_offset;
    }
    display(){
        var pointA= this.body.bodyA.position;
        var pointB= this.body.bodyB.position;
        
        var Anchor1x=pointA.x
        var Anchor1y=pointA.y

        var Anchor2x=pointB.x+this.x_offset;
        var Anchor2y=pointB.y+this.y_offset;

        strokeWeight(5);
       line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
}