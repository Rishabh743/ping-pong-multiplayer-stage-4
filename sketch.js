var backgroundImage
var player, gameState, playerCount
var form
var paddle1
var paddle2
var paddle1Img
var paddle2Img
var ball,ballImg
var allPlayers
var paddles=[]
function preload(){
backgroundImage=loadImage("./assets/background.jpg")
paddle1Img=loadImage("./assets/paddle1.png")
paddle2Img=loadImage("./assets/paddle2.png")
ballImg=loadImage("./assets/pongBall.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database()
game = new Game();
game.getState();
game.start();
}

function draw(){
background(backgroundImage)
if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}