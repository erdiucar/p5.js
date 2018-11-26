function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw()
{
  for (var x = 50; x < width - 50; x += 50)
  {
    for (var y = 50; y < height - 50; y += 50)
    {
      a = int(x * 255 / width);
      b = int(y * 255 / width);
      c = 255;

      stroke(a, b, c);
      line(x, y, width / 2, height / 2);
    }
  }
}