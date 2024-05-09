var font;

function preload() {
  font = loadFont('font/ManicDepressive-rlWL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textFont(font);
}

function draw() {
  background(0);
  background('black');
  textSize(38);
  fill('white');
  text('sometimes', width/2, height/6.5);
  text('it', width/2, height/3.4);
  text('feels like', width/2, height/2.2);
  text('we are', width/2, height/1.6);

  //code taken from https://cratecode.com/info/p5js-text-effects//
  var message = ". . . drowning . . . ";
  var spacing = 55;

  for (let i = 0; i < message.length; i++) {
    let x = 240 + i * spacing;
    let y = 600 + sin(frameCount * 0.1 + i) * 20;
    text(message.charAt(i), x, y);
 }
}

function keyPressed() {
    if (keyCode === 32) { 
        window.location.href = 'transition.html';
    }
}