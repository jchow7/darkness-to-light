var pathBackground;
var squareState = true;
var font;

function preload() {
  pathBackground = loadImage('img/path.jpg');
  font = loadFont('font/SuperPositive-vnnnL.ttf');
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textFont(font);
  rectMode(CENTER);
} 

function draw() { 
  background(240, 225, 211);
  image(pathBackground, 500, 200);
  text('click once', windowWidth/2, 50);
  text('always stay positive and keep moving forward',mouseX,mouseY);

  noStroke();
  if (squareState == true){
    square(windowWidth/2, windowHeight/2, 610);
  } 
}

function mousePressed(){
  if(squareState == true){
      squareState = false;
  } else {
    squareState = true;
  }
}

function keyPressed() {
    if (keyCode === 32) { 
        window.location.href = 'sunflower.html';
    }
}