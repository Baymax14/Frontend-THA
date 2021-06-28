var canvas = document.getElementById("myCanvas");
var respawnButton = document.getElementById('btn-repawn')
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 5;
var dy = -5;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var brickRowCount = 12;
var brickColumnCount = 7;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 8;
var brickOffsetTop = 50;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var playing = true;
// var pauseButtonElement = document.getElementById("pause")
var bounce;
var bricks = [];
// var volume = video.volume;
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function preload(){
  bounce = loadSound("bounce.wav")
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keydown", space, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// var pauseEvent = document.addEventListener("click",pause)

// function pause(){
//   if (dy == 0&&dx==0){
//     dy =5;
//     dx=5
//   }
//   else{
//     dx=0;
//     dy=0;
//   }
// }
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }

}
// var obj = document.createElement('audio');
// console.log(obj.volume); // 1
// obj.volume = 0.75;
mySound = new sound("bounce.wav")
bgSound = new sound("bg.mp3")
// bgSound.volume(0.2)
function space(e){
  if (e.key == "Space"){
      dy
  }
}
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
         
          
          score++;
          mySound.play()
          if(score == brickRowCount*brickColumnCount) {
            won = new sound("gamewon.wav")
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight -20, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
setInterval(()=>{
  if(x + dx > canvas.width-ballRadius  || x + dx < ballRadius) {
    dx = -dx;
    
    mySound.play();
  }
  if(y + dy < ballRadius) {
    dy = -dy;
    mySoundY = new sound ("bounce2.wav")
    mySoundY.play();
  }
  else if(y + dy > canvas.height-ballRadius-10) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
      mySound.play()
    }
    else {
      lives--;
      lost = new sound("lost.wav")
      gameOver = new sound("gameover.wav")
      if (lives>0){
        lost.play();
        confirm("RESPAWN",lives) 
      }
      if(lives ==0){
        bgSound.stop();
        gameOver.play();
      }
      if(!lives) {
        alert("GAME OVER");
        
        document.location.reload();

      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 5;
        dy = -5;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }
},1);

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
bgSound.play();
// bgSound.stop();
draw();