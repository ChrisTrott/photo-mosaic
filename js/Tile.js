import { TILE_WIDTH, TILE_HEIGHT } from './mosaic.js';
import Color from './Color';
import Render from './Render';

class Tile {
  constructor(posX, posY) {
    this.pixelPos = { x: posX * TILE_WIDTH, y: posY * TILE_HEIGHT };
    this.tilePos = { x: posX, y: posY };
    this.tileColor = '';
    this.drawCtx = '';
  }

  startRender(drawContext) {
    this.drawCtx = drawContext;
    this.calculateTileColor(this.drawCtx);
    let fetchPromise = this.startTileFetch();
    return fetchPromise;
  }

  calculateTileColor(drawCtx) {
    let rgbTotals = { r: 0, g: 0, b: 0 };
    let rgbAvg = { r: 0, g: 0, b: 0 };
    let pixDataIndex = 0;
    let pixelCount = 0;
    let pixels = drawCtx.getImageData(
                          this.pixelPos.x,
                          this.pixelPos.y,
                          TILE_WIDTH,
                          TILE_HEIGHT);
    // The count of pixels by 4 (rgba colors) is less than pixel data array size
    while ( (pixDataIndex += 4) < pixels.data.length ) {
      pixelCount++;
      rgbTotals.r += pixels.data[pixDataIndex];
      rgbTotals.g += pixels.data[pixDataIndex + 1];
      rgbTotals.b += pixels.data[pixDataIndex + 2];
    }

    rgbAvg.r = Math.floor(rgbTotals.r / pixelCount);
    rgbAvg.g = Math.floor(rgbTotals.g / pixelCount);
    rgbAvg.b = Math.floor(rgbTotals.b / pixelCount);

    this.tileColor = Color.rgbToHex(rgbAvg.r, rgbAvg.g, rgbAvg.b);
  }

  startTileFetch(promise, error) {
    let fetchReturn = fetch(`/color/${this.tileColor}`)
      .then((response) => {
        return response.text()
      })
      .then((responseData) => {
        this.renderTile(responseData);
      })
      .catch();
    return fetchReturn;
  }

  renderTile(responseData) {
    Render.renderTile(this.tilePos.y, this.tilePos.x, responseData);
  }
}

export default Tile;
