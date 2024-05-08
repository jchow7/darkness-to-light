var font;

function preload() {
  font = loadFont('font/RoughSerif-ALjqA.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   textAlign(CENTER);
   textFont(font);
}

function draw() {
  background('black');
  textSize(45);
  text('darkness to light.', windowWidth/2, windowHeight/2);
  fill('white');
  textSize(20);
  text('press space to continue', windowWidth/2, windowHeight/1.7); 
  textSize(12);
  text('(each page)', windowWidth/2, windowHeight/1.63);
  fill('white');
}

function keyPressed() {
    if (keyCode === 32) { 
        window.location.href = 'darkness.html';
    }
}