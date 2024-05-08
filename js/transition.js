var x = 0; 
var y = 0; 
var font;
var font2;

function preload() {
  font = loadFont('font/ManicDepressive-rlWL.ttf');
  font2 = loadFont('font/SuperPositive-vnnnL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   textAlign(CENTER);
   textFont(font);
}

function draw() {
  background('black');
  textSize(35);
  textFont(font);
  fill('white');
  text('but more importantly...', width/2, height/2);

  if (mouseY > 400){ 
  let x = map(mouseX, width, 240, 225, 211);
  
  background(240, 225, 211);
  fill('black');
  textFont(font2);
  text('but more importantly...', width/2, height/2);
}
}

function keyPressed() {
  if (keyCode === 32) { 
      window.location.href = 'path.html';
  }
}
