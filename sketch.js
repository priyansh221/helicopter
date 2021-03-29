const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 

var engine , world , ground , box , helicoptor 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var prop = {
        isStatic: true 
    }
    ground = Bodies.rectangle(200,390,400,20,prop);
    World.add(world,ground);
     
    box = new Box(200,200,30,30) 
    heli1 = new Helicoptor(200,200,130,70)
}

function draw(){
    background("black");
    Engine.update(engine)
    rectMode(CENTER) 
    fill("blue");
    rect(ground.position.x,ground.position.y,400,20);

    box.display()
    heli1.display()
}
