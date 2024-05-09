var words = ['anxiety', 'void', 'confused', 'sadness', 'frustrated', 'unmotivated', 'lonely', 
'stressed', 'nothing', 'drained', 'dull', 'failure', 'impossible', 'gloomy', 'anxious', 'fear', 
'messy', 'harmful', 'breakdown', 'alone', 'pressure', 'trapped', 'overwhelmed', 'help', 'silent', 
'pain', 'insecure', 'hate', 'darkness', 'unmotivated', 'negative', 'depression', 'shame', 'grief', 
'terrible', 'bad', 'angry', 'anxious', 'nobody', 'no one', 'nothing','difficult', 'lazy', 'pushy', 
'stubborn','breakdown', 'impossible','irresponsible', 'depression', ];

var wordIndex = 0;
var font;
var randomFontSize;

function preload() {
  font = loadFont('font/ManicDepressive-rlWL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  fill('white');
  background('black')
  randomFontSize = random(12, 48);
}

function draw (){
  textSize(40);
  text('the darkness of thoughts', windowWidth/2, windowHeight/2);
  textSize(25);
  text('click the mouse', windowWidth/2, windowHeight/1.7);
  fill('white');
}

function mouseClicked() {
  textSize(randomFontSize); 
  text(words[wordIndex], random(windowWidth), random(windowHeight));
  wordIndex += 1;

  if (wordIndex > 50) {
  wordIndex= 0;
  }
}

function keyPressed() {
    if (keyCode === 32) { 
        window.location.href = 'wave.html';
    }
}