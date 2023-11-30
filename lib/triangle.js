
class Triangle {
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
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
