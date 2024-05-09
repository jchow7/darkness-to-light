var font;

function preload() {
  font = loadFont('font/SuperPositive-vnnnL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  angleMode(DEGREES);
  textFont(font);
}

function draw() {
  background(240, 225, 211);
  textSize(24);
  noStroke();
  fill(255,255,102);
  ellipse(width/2,height/2,200,200);
  fill('black');
  text('a n d ...', width/2, 200);
  text('take one', width/2, 345);
  text('day', width/2, height/2);
  text('at a time', width/2, 420);
  text('believe',mouseX,mouseY);
  drawFlowerPetal();
  drawMessage();
}

function drawFlowerPetal(){
  if (mouseY < 300) {
  fill('white');
  ellipse(755,185,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(40);
  ellipse(809,-387,120,220);
  } 
  if (mouseY < 300) {
  fill('white');
  rotate(42);
  ellipse(445,-878,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(30);
  rotate(14);
  ellipse(-180,-1010,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(29);
  rotate(13);
  ellipse(-700,-700,120,220);
  }
   if (mouseY < 300) {
  fill('white');
  rotate(43);
  ellipse(-880,-100,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(30);
  rotate(12);
  ellipse(-615,432,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(35);
  ellipse(-140,659,120,220);
  }
  if (mouseY < 300) {
  fill('white');
  rotate(30);
  rotate(2);
  ellipse(345,590,120,220);
  }
}

function drawMessage(){
  //code taken from https://cratecode.com/info/p5js-text-effects//
  var message = "you got this :)";
  var spacing = 55;

  for (let i = 0; i < message.length; i++) {
    let x = 350 + i * spacing;
    let y = 600 + sin(frameCount * 0.1 + i) * 20;
    text(message.charAt(i), x, y);
 }
}
