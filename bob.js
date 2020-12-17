class bob{
    constructor(x,y){
        var bob_options={
            restitution:1,
            isStatic:false,
            friction:0,
            density:0.8
        }
        this.bobBody=Bodies.circle(x,y,40, bob_options);
        World.add(world,this.bobBody);
        this.radius=40;
    }

    display(){
        var pos=this.bobBody.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("yellow");
        strokeWeight(5);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
