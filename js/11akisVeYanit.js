function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  fill(0, 100);
}

function draw()
{
  // mouseX ve mouseY mouse konumu alınıyor
  ellipse(mouseX, mouseY, 20, 20);
}