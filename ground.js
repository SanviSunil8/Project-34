class Ground 
{
  constructor(x, y, w, h, angle,color) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y)
    rotate(angle)
    stroke(255);
    fill(this.color);
    rect(0,0, this.w, this.h);
    pop();
  }
  
}


