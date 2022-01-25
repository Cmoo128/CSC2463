function setup() {
  createCanvas(400, 400);
}


function draw() {
  
  background("#00008B");
  
  noStroke();
  fill("#FFFFFF")
  circle(200, 200, 185);

  fill(0, 150, 0);
  circle(200, 200, 175);
  
  fill("#FFFFFF")
  beginShape();
  vertex(200, 100); 
  vertex(230,170); 
  vertex(293,175); 
  vertex(245, 215);
  vertex(265, 275);
    vertex(200, 240); 
  vertex(135, 275);
  vertex(150, 215);
  vertex(107,175);
  vertex(170,170); 
  endShape();


  
}
