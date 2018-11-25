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

  for (var i = 50; i < width; i += 50)
  {
    for (var j = 0; j < height; j += 50)
    {
      ellipse(i, j, 25, 25);
    }
  }
}