class rope{
    constructor(bodyA,pointB){

 var options={
    bodyA:bodyA,
    pointB:pointB,
    'stiffness':0.4,
    'length':10

     }
     this.pointB=pointB;
     this.rope=Constraint.create(options);
     World.add(world,this.rope);
    }

    attach(body){
        this.rope.bodyA=body;
 }

 fly(){
     this.rope.bodyA=null;
 }
 display(){
     
 }
}