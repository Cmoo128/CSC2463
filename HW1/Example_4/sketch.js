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
  vertex(200, 102); 
  vertex(230,165); 
  vertex(293,165); 
  vertex(250, 215);
  vertex(265, 275);
    vertex(200, 235);
  vertex(135, 275);
  vertex(150, 215);
  vertex(107,165); 
  vertex(170,165); 
  endShape();
  
  
  fill("#FF0000")
  beginShape();
  vertex(200, 110); 
  vertex(225,170); 
  vertex(285,170); 
  vertex(243, 215);
  vertex(259, 268);
    vertex(200, 228);
  vertex(200-59, 268);
  vertex(200-43, 215);
  vertex(200-85,170); 
  vertex(200-25,170); 
  endShape();

}
