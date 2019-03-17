var siyah = 255;
var beyaz = 0;
var arkaPlanRenk, elipsRenk;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

// Fareye basılınca renkler zıttına dönüyor
function draw()
{
    if (mouseIsPressed)
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