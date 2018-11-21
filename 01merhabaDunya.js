// Bu fonksiyon bir kere çalışıyor
function setup() {
  // Çalışma alanı oluşturuluyor
  createCanvas(370, 370);
}

// Bu fonksiyonla program döngüye giriyor
function draw() {
  // Arka plan rengi ayarlanıyor
  background(160, 233, 111);

  // Dörtgen, elips ve çizgi
  rect(50, 50, 280, 280); // (x konum, y konum, x boyut, y boyut)
  ellipse(160, 150, 100, 100); // Üsttekinden tek farkı, x ve y konumununu elipsin merkezi olarak ayarlaması
  line(10, 10, 160, 150); // (x başlangıç konumu, y başlangıç konumu, x bitiş konumu, y bitiş konumu)

  // Şeklin dış çizgisinin ve çizginin kalınlığını ayarlıyor
  strokeWeight(10);
  line(350, 10, 160, 150);

  // Şeklin içinin rengini ayarlıyor
  fill(200, 0, 0, 100);
  ellipse(80, 250, 100, 60);

  // Şeklin dış çizgisinin ve çizginin rengini ayarlıyor
  stroke(220, 222, 30, 100);

  // Şeklin içinin dolu olmamasını sağlıyor
  noFill();
  ellipse(160, 250, 100, 60);

  fill(200, 100, 0, 185);

  // Şeklin dış çizgisinin olmamasını sağlıyor
  noStroke();
  ellipse(130, 285, 100, 60);
}