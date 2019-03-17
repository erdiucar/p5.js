/*
Animation: 
https://codepen.io/erdiucar/pen/mQaVoo
*/

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  background(0);

  fill(22, 22, 222, 80);
  ellipse(width / 2, height / 2, 400, 400);

  for (var x = 50; x < width - 50; x += 50)
  {
    for (var y = 50; y < height - 50; y += 50)
    {
      for (var i = 0; i < 30; i += 6)
      {
        r = int(x * 255 / width);
        g = int(y * 255 / width);
        //b = int(sin(x) + sin(y));
        b = 255;

        stroke(r, g, b, 100);

        line(x + i, y, x + i, y + 20);
      }

      line(x, y, x + 24, y + 20);
      line(x + 24, y, x, y + 20);

      stroke(r, g, b, 60);
      line(x, y, width / 2, height / 2);
    }
  }
}
