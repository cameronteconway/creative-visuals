let numberOfDrops = 150;
let rain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDrops; i++) {
    rain.push(new Drop())
  }
}

function draw() {
  background(0);
  for (let i = 0; i < rain.length; i++) {
    rain[i].fall()
    rain[i].create()
    if (rain[i].hasFallen()) {
      rain[i].reset();
    }
  }
}

class Drop {
  constructor() {
    this.reset()
    this.colour = (255,255,255,90)
  }
  
  reset() {
    this.x = random(0, width)
    this.y = -random(-height, 0) // Initialise rain off screen
    this.length = random(1.5, 8);
    if(this.length > 3) {
      this.length = random(1.5,8)
    }
    this.speed = this.length / 1; // Thicker drops travel faster
    this.dropThickness = floor(this.length/3);
    if(this.dropThickness < 1) {
      this.dropThickness = 1;
    }
  }
  
  create() {
    stroke(this.colour);
    strokeWeight(this.dropThickness);
    line(this.x, this.y, this.x, this.y - this.length * 2);
  }
  
  fall() {
    this.y += this.speed;
  }
  
  hasFallen() {
    let answer = false;
    if (this.y - this.length > height) {
      answer = true;
    }
    return answer;
  } 
}