var speed,weight , car , wall;
function setup() {
  createCanvas(800,400);
  wall = createSprite(700, 200, 100, 400);
  wall.shapeColor = "white";
  car = createSprite(100,200,50,50);
  car.shapeColor = "white";
}

function draw() {
  background("black");
  drawSprites();
  speed = random(50,100);
  car.velocityX = speed;
  weight = random(500,1000);
  if(car.x - wall.x < car.width/2 + wall.width/2
    &&wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapeColor= color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor =color(0,255,0);
    }
  }

}