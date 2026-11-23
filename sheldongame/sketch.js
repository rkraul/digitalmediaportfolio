let ballX = 450;
let ballX2 = 150;
let ballY = 300;
let ballY2 = 300;
let ballSize = 60;
let ballSize2 = 60;
let score = 0;
let gameState = "START";
let img1;
let img2;
let img3;

async function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20)

  img1 = await loadImage("sheldonlaptop.jpeg")
  img2 = await loadImage("youngsheldon1.jpeg")
  img3 = await loadImage("youngsheldon2.jpeg")
  
}

function draw() {
  background(149, 84, 255);

  if (gameState == "START") {
    startScreen();
  }

  if (gameState == "L1") {
     levelOne();
  }

  if (gameState == "L2") {
    levelTwo();
  }

  if (gameState == "L3") {
    levelThree();
  }

  if (gameState == "YAY, You did it!") {
    winScreen();
  }
  fill (255);
  text("Score: "+ score, width / 2, 40,);
  
}

function startScreen() {
  background(30);

  text("Catch me if you can, Bazinga", width / 2, height / 2 - 30);
  text("press any key to start", width / 2, height / 2 + 10);

  if (keyIsPressed) {
    gameState = "L1"
  }
}

function levelOne() {

  text("level One", width / 2, height - 20);

  let disToball = dist(ballX, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {
     ballX = random(width);
     ballY = random(height);
     score = score + 1;
  }
   
  let disToball2 = dist(ballX2, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {  
    ballX2 = random(width);
    ballY2 = random(height);
  }

  if (score >= 15) {
    gameState = "L2"; 
  }

  line(ballX, ballY, mouseX, mouseY);
  line(ballX2, ballY2, mouseX, mouseY);
  image(img2,ballX,ballY,ballSize,ballSize);
  image(img2,ballX2,ballY2,ballSize2,ballSize2);
}

function levelTwo() {

  text("level Two", width / 2, height - 20);

  let disToball = dist(ballX, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {
     ballX = random(width);
     ballY = random(height);
     score = score + 1;
  }

  let disToball2 = dist(ballX2, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {  
    ballX2 = random(width);
    ballY2 = random(height);
  }
   
   if (score >= 30) {
    gameState = "L3"; 
  }
  
  //line(ballX, ballY, mouseX, mouseY);

  image(img3,ballX,ballY,ballSize,ballSize);
  image(img3,ballX2,ballY2,ballSize2,ballSize2);
  
}

function levelThree() {

  text("level Three", width / 2, height - 20);

  let disToball = dist(ballX, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {
     ballX = random(width);
     ballY = random(height);
     score = score + 1;
  }
  
  let disToball2 = dist(ballX2, ballY, mouseX, mouseY);
  if (disToball < ballSize / 2) {  
    ballX2 = random(width);
    ballY2 = random(height);
  }

  if (score >= 50) {
    gameState = "YAY, You did it!"
  }

  //line(ballX, ballY, mouseX, mouseY);
  
 image(img1,ballX,ballY,ballSize,ballSize);
 image(img1,ballX2,ballY2,ballSize2,ballSize2);

}

function winScreen() {
  background(255, 51, 255);

  text("BAZINGA", width / 2, height/ 2);
}