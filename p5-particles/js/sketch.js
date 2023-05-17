let numOfParticles = 150;
let particles = [];
let colours = [];

function setup() {
  createCanvas(500, 500);
  // Generate random colour values for the dots
  for (let i = 0; i < numOfParticles; i++) {
    let rgbObj = {red: Math.round(random(0, 254)), green: Math.round(random(0, 254)), blue: Math.round(random(0, 254))}
    colours.push(rgbObj)
  }
  
  for (let i = 0; i < numOfParticles; i++) {
    particles.push(new Particle(10, colours[i], particles))
  }
  
}

function mouseMoved() {
  for (let i = 0; i < particles.length; i++) {
    let dis = dist(mouseX, mouseY, particles[i].x, particles[i].y);
    if(dis < 60) {
      particles[i].changeAppearance();
    } else {
      particles[i].colour = (255, 100);
      particles[i].radius = 10;
    }
  }
}

function draw() {
  background(0);
  // console.log(particles)
  for (let i = 0; i < particles.length; i++) {
    particles[i].create();
    particles[i].move();
  }
}

class Particle {
  constructor(radius, colour) {
    this.x = random(0,width);
    this.y = random(0,height);
    this.radius = radius
    this.colour = (255, 100)
    this.xSpeed = random(-1.5, 1.5)
    this.ySpeed = random(-1.5, 1.5)
  }
  
  create() {
    stroke(255);
    fill(this.colour);
    // fill(this.colour.red, this.colour.green, this.colour.blue)
    circle(this.x, this.y, this.radius)
  }
  
  changeAppearance() {
    this.colour = color(random(255), random(255), random(255))
    this.radius = 20;
  }
  
  move() {
    if(this.x < 0 || this.x > width) {
      this.xSpeed*=-1;
    }
    if(this.y < 0 || this.y > height) {
      this.ySpeed*=-1;
    }
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}