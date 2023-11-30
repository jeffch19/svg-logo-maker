

class Circle {
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
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

module.exports = Circle;
