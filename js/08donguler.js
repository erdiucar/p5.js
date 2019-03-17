function setup()
{
  createCanvas(500, 500);
  background(250);
  noFill();
}

function draw()
{
  var color = 0;

  for (var x = 50; x < width - 50; x += 50)
  {
    for (var y = 50; y < height - 50; y += 50)
    {
      stroke(color);
      ellipse(x, y, 40, 40);
    }
    color += 33;
  }
}