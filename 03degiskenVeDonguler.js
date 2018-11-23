function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  var x = width / 2;
  var y = 100;

  background(200);

  for (var i = 0; i < height; i++)
  {
    stroke(i / width * 255);
    line(i, 0, i, height);
    line(0, i, width, i);
  }
}