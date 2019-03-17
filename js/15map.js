function setup()
{
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw()
{
    var backColor = map(mouseX, 0, width, 0, 255);
    background(backColor);

    var ellipseColor = map(mouseX, 0, width, 255, 0);
    fill(ellipseColor);

    ellipse(mouseX, mouseY, 50, 50);
}