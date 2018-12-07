var diam;
var theta;
var renk;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    // Yin-Yang'ın boyutu ayarlanıyor
    diam = height / 3;
}

function draw()
{
    background(renkKoyudanMiBasliyor(true));
    yinYang();
}

function yinYang()
{
    translate(mouseX, mouseY);
    rotate(mouseX / 200);
    fill(renkKoyudanMiBasliyor(true));
    strokeWeight(0.5);
    stroke(renkKoyudanMiBasliyor(false), 150);
    arc(0, 0, diam, diam, PI / 2, PI + PI / 2);
    fill(renkKoyudanMiBasliyor(false));
    arc(0, 0, diam, diam, PI + PI / 2, TWO_PI + PI / 2);

    noStroke();
    fill(renkKoyudanMiBasliyor(true));
    ellipse(0, -diam / 4, diam / 2, diam / 2);
    fill(renkKoyudanMiBasliyor(false));
    ellipse(0, diam / 4, diam / 2, diam / 2);

    fill(renkKoyudanMiBasliyor(false));
    ellipse(0, -diam / 4, diam / 8, diam / 8);
    fill(renkKoyudanMiBasliyor(true));
    ellipse(0, diam / 4, diam / 8, diam / 8);

    theta += TWO_PI / frames;
}

function renkKoyudanMiBasliyor(renKoyuMu)
{
    if (renKoyuMu)
    {
        renk = map(mouseX, 0, width, 0, 255);
    }
    else
    {
        renk = map(mouseX, 0, width, 255, 0);
    }

    return renk;
}
