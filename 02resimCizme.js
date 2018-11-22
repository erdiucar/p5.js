function setup()
{
  createCanvas(960, 240);
  noStroke();
}

// Resim çizerken adobe illustrator'dan x ve y koordinatlarını alabilirsin.
function draw()
{
  background(200, 100, 0);

  // Soldaki dinazor
  beginShape();
  fill(255, 190, 0);
  vertex(100, 240);
  vertex(200, 180);
  vertex(220, 120);
  vertex(160, 40);
  vertex(450, 120);
  vertex(320, 160);
  vertex(400, 180);
  vertex(280, 200);
  vertex(260, 240);
  endShape();
  fill(0, 155);
  ellipse(310, 120, 16, 16);
  fill(255, 0, 0, 220);
  ellipse(310, 120, 4, 4);
  fill(0);
  ellipse(310, 120, 1, 1);

  // Sağdaki dinazor
  beginShape();
  fill(0, 190, 255);
  vertex(740, 240);
  vertex(720, 180);
  vertex(580, 160);
  vertex(680, 140);
  vertex(560, 100);
  vertex(840, 20);
  vertex(780, 100);
  vertex(820, 180);
  vertex(920, 240);
  endShape();
  fill(0, 155);
  ellipse(690, 100, 20, 20);
  fill(255, 0, 0, 220);
  ellipse(690, 100, 5, 5);
  fill(0);
  ellipse(690, 100, 2, 2);
}