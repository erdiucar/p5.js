/* 
Animation: 
https://codepen.io/erdiucar/pen/ebpgxx
*/

var resim;
var aci; // Açı
var resimBoyut;
var resimX;

function preload()
{
    // Resmi resim değişkenin yüklüyor
    resim = loadImage("ball.png");
}

function setup()
{
    // Çalışma alanının boyutu belirleniyor. windowsWigth ve windowHeight ile boyut pencereyi kaplıyor
    createCanvas(windowWidth, windowHeight);
    // Resmin boyutu yükseklik / 4
    resimBoyut = height / 3;
}

function draw()
{
    // Arka plan rengi yeşil. Buraya çim resmi koyulabilir
    background(38, 134, 41);

    var y = map(0, height, 0, 10);

    // Açıyı mouse'a göre ayarlıyorum
    aci = map(mouseX, 0, width, 0, DonmeAyari(height));
    // Resmin x koordinatını, köşelere değmemesi için bu şekilde ayarladım
    resimX = map(mouseX, 0, width, resimBoyut / 1.5, width - (resimBoyut / 1.5));

    // Resmin konumunu burada belirliyorum
    translate(resimX, height / 2);
    // Döndürme fonksiyonu
    rotate(aci);
    // Resmi dönerken sabitliyor
    imageMode(CENTER);
    // Resim ekrana getiriliyor
    image(resim, 0, 0, resimBoyut, resimBoyut);
}

// Önce animasyonu test etmek amaçlı yüksekliği 700 yaptım. map fonksiyonunda 9 yazdığım zaman animasyon gözüme güzel gözüktü. o dönme animasyonunu topun boyutu değiştiğinde korumak için bu fonksiyonu yazdım.
function DonmeAyari(yukseklik)
{
    return 6300 / yukseklik;
}
