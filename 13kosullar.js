function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(25);
}

function draw()
{
    // Eğer mouse basılıysa çizgi çiziliyor
    if (mouseIsPressed)
    {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
