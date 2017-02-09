class Color {
  static rgbToHex(red, green, blue) {
    const redHex = this.getHex(red);
    const greenHex = this.getHex(green);
    const blueHex = this.getHex(blue);
    return `${redHex}${greenHex}${blueHex}`;
  }

  // Convert rgb numbers to base 16 with leading 0 if needed
  static getHex(rgbColor) {
    const hex = rgbColor.toString(16);
    if (hex.length < 2) {
      return '0' + hex;
    }
    return hex;
  }
}

export default Color;
