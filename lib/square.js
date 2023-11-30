
class Square {
  constructor() {
    this.color = '';
    this.text = '';
  }

  setColor(color) {
    this.color = color;
  }
  setText(text) {
    // Ensure only up to three characters are used
    this.text = text.slice(0, 3);
  }

  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
