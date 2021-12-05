class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        console.log("dentro do ifgameState")
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          console.log("dentro do if de existencia count")
        } else {
          playerCount = 0;
        }
        form = new Form()
        form.display(playerCount);
      }

     
     bird = new Bird(200,50);
     bird1 = new Bird(200, 50);
     birds = [bird];
     birds = [bird1];
     slingshot = new SlingShot(bird.body,{x:200, y:50});

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      player.getBirdsAtEnd();
  
      if(allPlayers !== undefined){
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          //birds[index-1].x = x;
          //birds[index-1].y = y;
  
          if (index === player.index){
            stroke(10);
            fill("Red");
            ellipse(x,y,60,60);
            //birds[index - 1].shapeColor = "red";
           // camera.position.x = displayWidth/2;
           // camera.position.y = birds[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
        drawSprites();
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance >3860) {
        gameState = 2;
        player.rank+=1;
        Player.updateBirdsAtEnd(player.rank);
      }
  
     
    }
    end() {
      console.log(player.rank);
      console.log("gameEnd");
    }
  }