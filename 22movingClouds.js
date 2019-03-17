var leftX;
var rightX;
var sunSize;
var cloudPosition;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    
    // Sun size and sun start
    sunSize = height / 2;
  
    // Cloud starting positions
    leftX = 0;
    rightX = width;
    cloudPosition = height / 3.5;
}

draw = function() {
    // Cloud movement
    leftX++;
    rightX--;
    
    background(184, 236, 255);
    
    // Sun
    fill(255, 170, 0);
    ellipse(width / 2, height / 3, sunSize, sunSize);
    
    // Clouds 
    fill(255, 255, 255);
    // Left cloud
    ellipse(leftX, cloudPosition + sunSize/3, 5/6 * sunSize, 2/3 * sunSize);
    ellipse(leftX + 2/5 * sunSize, cloudPosition + sunSize/3, 1/2 * sunSize, 2/5 * sunSize);
    ellipse(leftX- 2/5 * sunSize, cloudPosition + sunSize/3, 1/2 * sunSize, 2/5 * sunSize);
  
    // Right cloud
    ellipse(rightX, cloudPosition, 5/6 * sunSize, 2/3 * sunSize);
    ellipse(rightX+ 2/5 * sunSize, cloudPosition, 1/2 * sunSize, 2/5 * sunSize);
    ellipse(rightX- 2/5 * sunSize, cloudPosition, 1/2 * sunSize, 2/5 * sunSize);
};
