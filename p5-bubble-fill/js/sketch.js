let numOfBubbles = 10;
let maxCounter = 10;
let bubbles = [];

let counter = 0;
function addBubbles() {
  for(let i = 0; i < numOfBubbles; i++) {
    bubbles.push(new Bubble(random(15,30)))
  }
  
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
  
  counter++;
  
  if(counter > maxCounter) {
    clear();
    counter = 0;
    bubbles = [];
    background(0);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(addBubbles, 500);
  background(0);
}

class Bubble {  
  constructor(size) {
    this.size = size;
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(random(0,width), random(0,height), this.size)
  }
}