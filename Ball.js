class Ball 
{
  constructor(x, y, radius, color) 
  {
    let options = {
      restituition: 0.7,
      density:0.5
    };
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius
    this.color = color
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill(this.color);
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
  }
  
}


