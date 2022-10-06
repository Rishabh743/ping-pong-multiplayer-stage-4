class Game{
    constructor(){
this.resetButton=createButton("reset")
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }
    update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
start(){
    player=new Player()
    playerCount=player.getCount()
    form = new Form();
    form.display();
    paddle1=createSprite(60,windowHeight/2)
    paddle1.addImage("paddle1",paddle1Img)
    paddle1.scale=0.3
    paddle2=createSprite(windowWidth-60,windowHeight/2)
    paddle2.addImage("paddle2",paddle2Img)
    paddle2.scale=0.4
    paddles=[paddle1, paddle2]
    ball=createSprite(windowWidth/2, windowHeight/2)
    ball.addImage("pongBall",ballImg)
    ball.scale=0.13
    
}    
handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {},
      carsAtEnd: 0
    });
    window.location.reload();
  });
}
handleElements(){
  form.hide()
  this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
}
play(){
this.handleElements()
this.handleResetButton()
this.handlePlayerControls()
Player.getPlayersInfo()
if(allPlayers!==undefined){
  var index=0
  for(var plr in allPlayers){
    index=index+1
    var x = allPlayers[plr].positionX;
    var y = height - allPlayers[plr].positionY;
    //paddles[index - 1].position.x = x;
    paddles[index - 1].position.y = y;
    if(index==player.index){
      stroke(10)
      fill("red")
      ellipse(x,y,60,60)
    }
  }
}
drawSprites()
}
handlePlayerControls(){
  if(keyIsDown(32)){
    console.log("space bar event")
ball.velocityX=2
ball.velocityY=2
player.update()
  }
  if(keyIsDown(UP_ARROW)&&player.positionY>200){
    player.positionY-=10
    player.update()
  }
  if(keyIsDown(DOWN_ARROW)&&player.positionY<height+200){
    player.positionY+=10
    player.update()
  }
  }
}