let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  // Add to my angle
  angle = angle + 1;

  // Call the function I created
  drawCoordinateSystem();

  circle(0, 0, 2);
  
  // Draw a line using the sin and cos functions to get it to rotate
  // following the angle value
  let currentSecond = second()*6 - 90;
  let x = cos(currentSecond);
  let y = sin(currentSecond);
  line(0, 0, x, y);
}

// Defined a new function called "drawCoordinateSystem"
function drawCoordinateSystem() {
  // translate to the center and scale up to make
  // a small coordinate system
  translate(width/2, height/2);
  scale(50);
  strokeWeight(.05);
  
  line(0, -height/2, 0, height/2);
  line(-width/2, 0, width/2, 0);

  // Add hash marks and labels along the x-axis
  textSize(.5);
  for (let i = -5; i < 6; i++) {
    line(i, -.5, i, .5);
    text(i, i, .5);
  }

  for (i = 1; i < 6; i++) {
    //line(-i, -1, -i, 1);
    line(1, i, -1, i);
    line(1, -i, -1, -i);
    text(i, 1, -i);
    //text("-" + i, -i, 1);
    text("-" + i, -1, i);
  }

  // Create a nested for loop to draw a grid on the canvas 
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      point(i, j);
    }
  }
}