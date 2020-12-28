class ball{
    constructor(x,y,width,height,angle){
        var options={
            'frictionAir':0.005,
            'density':0.04

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.angle=angle;
        World.add(world,this.body);
    }
    display(){
   var pos=this.body.position
   var angle=this.body.angle
   push()
   translate(pos.x,pos.y);
   rotate(angle);
ellipseMode(CENTER);
fill("green");
ellipse(0,0,this.width,this.height);
pop()
}
}