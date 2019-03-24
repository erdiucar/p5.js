/* --------------
-- OBJECT TYPES --
--------------- */

///////////////////
// Flower Object
///////////////////

class Flower {
  constructor(xPosition, yPosition, height) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.height = height;
    this.randomColorRGB = [
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255)
    ];
  }

  // Random color flower
  drawFlower() {
    // Flower body
    noStroke();
    fill(16, 122, 12);
    rect(
      this.xPosition,
      this.yPosition,
      (10 / 100) * this.height,
      -this.height
    );

    // Flower head
    stroke(0, 0, 0);
    fill(
      this.randomColorRGB[0],
      this.randomColorRGB[1],
      this.randomColorRGB[2]
    );
    ellipse(
      this.xPosition - (10 / 100) * this.height,
      this.yPosition - this.height,
      (20 / 100) * this.height,
      (18 / 100) * this.height
    );
    ellipse(
      this.xPosition + (5 / 100) * this.height,
      this.yPosition - this.height - (15 / 100) * this.height,
      (20 / 100) * this.height,
      (18 / 100) * this.height
    );
    ellipse(
      this.xPosition + (5 / 100) * this.height,
      this.yPosition - this.height + (15 / 100) * this.height,
      (20 / 100) * this.height,
      (18 / 100) * this.height
    );
    ellipse(
      this.xPosition + (20 / 100) * this.height,
      this.yPosition - this.height,
      (20 / 100) * this.height,
      (18 / 100) * this.height
    );
    fill(
      this.randomColorRGB[3],
      this.randomColorRGB[4],
      this.randomColorRGB[5]
    );
    ellipse(
      this.xPosition + (5 / 100) * this.height,
      this.yPosition - this.height,
      (20 / 100) * this.height,
      (20 / 100) * this.height
    );
  }

  // Increase flower height
  growFlower(amount) {
    this.height += amount;
  }
}

///////////////////
// Button Object
///////////////////

class Button {
  constructor(
    xPosition,
    yPosition,
    height,
    width,
    colorRed,
    colorGreen,
    colorBlue,
    text
  ) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.height = height;
    this.width = width;
    this.colorRGB = [colorRed, colorGreen, colorBlue];
    this.text = text;
  }

  // Draw button
  createButton() {
    fill(this.colorRGB[0], this.colorRGB[1], this.colorRGB[2]);
    rect(this.xPosition, this.yPosition, this.width, this.height);

    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(this.width / 10);
    text(
      this.text,
      this.xPosition + this.width / 2,
      this.yPosition + this.height / 2
    );
  }
}

///////////////////
// Grow Flower Button
///////////////////

class GrowFlowersButton extends Button {
  constructor(
    xPosition,
    yPosition,
    height,
    width,
    colorRed,
    colorGreen,
    colorBlue,
    text
  ) {
    super(
      xPosition,
      yPosition,
      height,
      width,
      colorRed,
      colorGreen,
      colorBlue,
      text
    );
  }

  // Growing flowers event
  clickEvent(flowerObject, growAmount) {
    if (
      mouseX > this.xPosition &&
      mouseX < this.xPosition + this.width &&
      mouseY > this.yPosition &&
      mouseY < this.yPosition + this.height
    ) {
      for (let index = 0; index < flowerObject.length; index++) {
        const element = flowerObject[index];

        element.growFlower(growAmount);
      }
    }
  }
}

/* --------------
-- MAIN PROGRAM --
--------------- */

let randomFlowers, growButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Random flowers (Flowers have different colors)
  randomFlowers = [];
  for (let index = 0; index < 4; index++) {
    randomFlowers.push(
      new Flower((index + 1) * ((132 / 700) * width), height, height / 5)
    );
  }
  
  // Growing button
  growButton = new GrowFlowersButton(
    width - height / 2,
    0,
    height / 3,
    height / 2,
    255,
    255,
    255,
    "Click to Grow"
  );
}

function draw() {
  // Draw blue background
  background(110, 240, 255);

  // Draw flowers
  for (let index = 0; index < randomFlowers.length; index++) {
    const element = randomFlowers[index];

    element.drawFlower();
  }
  
  // Draw button
  growButton.createButton();
}

function mouseClicked() {
  // Click event of button
  growButton.clickEvent(randomFlowers, height / 30);
}
