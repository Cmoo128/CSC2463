function setup() {
  createCanvas(480, 250);
}


function draw() {
  
  background(0);
  
  fill('#FFFF00')
  arc(115, 125, 200, 200, QUARTER_PI + PI, 700);

  fill('#FF0000')
  square(250, 25, 200, 90, 90, 0, 0);

  fill('#FFFFFF')
  noStroke();
  circle(305, 110, 60);
  circle(395, 110, 60);

  fill('#0000FF')
  circle(305, 110, 40);
  circle(395, 110, 40);

}