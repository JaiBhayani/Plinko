const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var divisions=[];
var particles = [];
var plinkos = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 

  for (var j = 75; j <=width; j = j+50 ){
plinkos.push(new Plinko(j,75));    
  }

  for(var j = 50; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 75; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 50; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }
 





}

function draw() {
  background("green"); 
Engine.update(engine);

  
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();

  }

  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  

  if(frameCount % 60===0){
    particles.push(new Particle(random(10,780),0,10,10));
  
    
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  drawSprites();
  
}

