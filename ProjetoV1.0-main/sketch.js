const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, bird1;
var birds;
var slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png")
}

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
 createCanvas(2000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,3000,20);
  platform = new Ground(150, height, 200, 170);

  box1 = new Box(800,940,70,70);
  box2 = new Box(1020,940,70,70);
  pig1 = new Pig(910, 900);
  log1 = new Log(910,890,300, PI/2);

  box3 = new Box(800,900,70,70);
  box4 = new Box(1020,900,70,70);
  pig3 = new Pig(910, 940);

  log3 =  new Log(910,930,300, PI/2);

  box5 = new Box(910,880,70,70);
  log4 = new Log(860,870,150, PI/7);
  log5 = new Log(970,870,150, -PI/7); 
  
}


function draw(){

  if(playerCount === 2){
    game.update(1);
    console.log("dentro de 4")

    background(backgroundImg);
    Engine.update(engine);
      strokeWeight(4);
      box1.display();
      box2.display();
      ground.display();
      pig1.display();
      log1.display();
  
      box3.display();
      box4.display();
      pig3.display();
      log3.display();
  
      box5.display();
      log4.display();
      log5.display();
      bird.display();
      bird1.display();
  
      platform.display();
      slingshot.display();
          
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}
  

