/* 
Animation: 
https://codepen.io/erdiucar/pen/GedoPG
*/

var sunWidth;
var startHeight;
var sunColor;
var sunColorChange;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
 
    // the starting width for the sun
    sunWidth = 50;
    // the starting color for the sun
    sunColor = 204;
    // starting height
    startHeight = height / 1.3;
  
    sunColorChange = 204 / width;
}

function draw() {
    sunWidth = sunWidth + 1;
    sunColor = sunColor - sunColorChange;
    
    // the beautiful blue sky
    background(82, 222, 240);

    // The sun, a little circle on the horizon
    fill(255, sunColor, 0);
    ellipse(width / 2, startHeight, sunWidth, sunWidth);
    
    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, startHeight, width, height); 
    
    // Eternal darkness
    if (sunColor < 0) {
      background(0, 0, 0);
      fill(0, 0, 0);
      ellipse(width / 2, startHeight, sunWidth, sunWidth);
      rect(0, startHeight, width, height); 
    }
}
