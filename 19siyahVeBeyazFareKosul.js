var siyah = 255;
var beyaz = 0;
var arkaPlanRenk, elipsRenk;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

// Fare elipsin üzerine gelince renkler zıttına dönüyor
function draw()
{
    var fareUzaklık = dist(width / 2, height / 2, mouseX, mouseY);

    if (fareUzaklık < 75 && mouseIsPressed)
    {
        arkaPlanRenk = siyah;
        elipsRenk = beyaz;
    }
    else
    {
        arkaPlanRenk = beyaz;
        elipsRenk = siyah;
    }

    background(arkaPlanRenk);
    fill(elipsRenk);
    ellipse(width / 2, windowHeight / 2, 150, 150);
}