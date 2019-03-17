function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  background(166, 168, 204);
  noFill();
  stroke(62, 34, 222, 100);
  strokeWeight(4);

  for (var i = 50; i < 600; i += 50)
  {
    ellipse(width / 2, height / 2, i, i);
    //ellipse((width / 2) + i * ((i % 50) % 2 - 0.5), height / 2, i, i);
  }
}