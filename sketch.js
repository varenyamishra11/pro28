var paper1, ground1,
dustbin1,dustbin2,dustbin3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
  
}

function setup() {
  createCanvas(1300, 700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650, 690, width, 30);
  
  dustbin1 = new dustbins(1015, 615, 20, 150);
  dustbin3 = new dustbins(1100, 680, 150, 20);
  dustbin2 = new dustbins(1185, 615, 20, 150);
  
  paper1 = new paper(150, 300, 40);
  
  slingshot = new Launcher(paper1.body,{x:150, y:300});

  
  Engine.run(engine);

}


function draw() {
 
  background(7);

  
  ground1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  paper1.display();
  
  slingshot.display();
   
  

}

/*function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 120,y: -120});
  }

}*/
function mouseDragged(){
  Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
