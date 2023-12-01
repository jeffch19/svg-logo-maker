

class Circle {
  constructor() {
    this.color = '';
    this.text = '';
    this.textColor = '';
    this.shapeColor = '';
  }

  setColor(color) {
    this.color = color;
  }
  setText(text) {
    // Ensure only up to three characters are used
    this.text = text.slice(0, 3);
  }
  setTextColor(textColor){
    this.textColor = textColor;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor; 
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="${this.color}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

  </svg>`;
  }
}

module.exports = Circle;
