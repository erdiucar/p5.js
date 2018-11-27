var r, g, b;

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
      // burada her satırda if - else if kullanabilirsin.
      if (x < width / 2)
      {
        if (y < height / 2)
        {
          r = 15;
          g = 25;
          b = 65;
        }
        else
        {
          r = 155;
          g = 25;
          b = 65;
        }
      }
      else
      {
        if (y > height / 2)
        {
          r = 66;
          g = 25;
          b = 222;
        }
        else
        {
          r = 44;
          g = 87;
          b = 45;
        }
      }

      stroke(r, g, b);
      line(x, y, width / 2, height / 2);
    }
  }
}