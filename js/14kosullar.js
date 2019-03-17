var r;
var g;
var b;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw()
{
    if (mouseX < width / 2)
    {
        r = 55;
        g = 111;
        b = 111;
    } else
    {
        r = 222;
        g = 222;
        b = 222;
    }

    // Eğer mouse basılıysa elips çiziliyor
    if (mouseIsPressed)
    {
        fill(r, g, b);
        ellipse(mouseX, mouseY, 20, 20);
    }
}