var r, g, b;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
}

function draw()
{
  for (var x = 50; x < width - 50; x += 20)
  {
    for (var y = 50; y < height - 50; y += 20)
    {
      r = int(x * 255 / width);
      g = int(y * 255 / width);
      b = int(sin(x) + sin(y));
      //b= 255;

      stroke(r, g, b);
      ellipse(x, y, 40, 40);
    }
  }
}