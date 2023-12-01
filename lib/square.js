// square.js

class Square {
  constructor() {
    this.color = '';
    this.text = '';
    this.textColor = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    // Ensure only up to three characters are used
    this.text = text.slice(0, 3);
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <rect width="200" height="200" fill="${this.color}" />
      <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = Square;

