function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(4);
}

function draw()
{
    // pmouseX ve pmouseY ile bir önceki fare konumu alınıyor
    line(mouseX, mouseY, pmouseX, pmouseY);
}