import { TILE_WIDTH, TILE_HEIGHT } from './mosaic.js';
import Tile from './Tile';
import Render from './Render';

class Grid {
  constructor(rows, cols, drawContext) {
    this.currentRow = 0;
    this.drawCtx = drawContext;
    this.tiles = Array(rows);
    for (var row = 0; row < rows; row++) {
      this.tiles[row] = new Array();
      for (var col = 0; col < cols; col++) {
        this.tiles[row].push(new Tile(col, row));
      }
    }
  }

  process() {
    Render.clearMosaic();
    Render.setupMosaic(rows, cols);
    processRow();
  }

  processRow() {
    if (this.currentRow < this.tiles.length) {
      let row = this.tiles[this.currentRow];
      let promises = [];
      for (let tile of row) {
        promises.push(tile.startRender(this.drawCtx));
      }
      Promise.all(promises).then(() => {
        this.currentRow++;
        this.processRow();
      });
    }
  }
}

export default Grid;
