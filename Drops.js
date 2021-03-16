class Drop{

    constructor(x,y, width, height, angle){
        
        isStatic:false
        restitution:1
        density:0.3
        friction:0.1
        
        this.body=Bodies.rectangle(x,y,width,height)
        this.width= 20;
        this.height = 20;
        this.x=x;
        this.y=y;
        World.add(world, this.body)
    }
  display(){
    var angle = this.body.angle;

    push();
    rotate(angle)
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(this.x, this.y, this.width, this.height)





  }

}