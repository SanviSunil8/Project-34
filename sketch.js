const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground1,ground2,ground3;
var ball;
var balls=[]


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth)
  console.log(windowHeight)
  engine = Engine.create();
  world = engine.world;
  
  

  //creating walls
  ground1 =new Ground(350,190,width/2,20, -241.7,"red");
  ground2 = new Ground(1000,300,width/2,20,-16.1,"blue");
  ground3 = new Ground(400,530,width/2,20,-270,"green");

  var ball_options={  //ball properties
    restitution: 1
  }
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  //to display objects
  ground1.show();
  ground2.show();
  ground3.show();
  
  if (frameCount%40==0){
    ball = new Ball(60, 50, 20, "white")
    balls.push(ball)
  }
  if (frameCount%90==0){
    ball = new Ball(width-100, 100, 20, "yellow")
    balls.push(ball)
  }
  for(i=0; i<balls.length; i++){
    balls[i].show();
  }
}
