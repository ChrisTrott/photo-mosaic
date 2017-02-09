import { TILE_WIDTH, TILE_HEIGHT } from './mosaic';
import Grid from './Grid';

class CanvasImage {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.img = new Image();
    this.reader = null;
  }

  readImage(imageFile) {
    let imageLoaded = () => {
      let drawCtx = this.canvas.getContext('2d');
      this.canvas.width = this.img.width;
      this.canvas.height = this.img.height;
      drawCtx.drawImage(this.img,0,0);
      this.setupGrid(drawCtx);
    }
    let loadImage = () => {
      this.img.onload = imageLoaded;
      this.img.src = this.reader.result;
    }

    this.reader = new FileReader();
    this.reader.onload = loadImage;
    this.reader.readAsDataURL(imageFile);
  }

  setupGrid(drawCtx) {
    // Split the image into tiles based on TILE_WIDTH and TILE_HEIGHT
    const tileRowSize = Math.floor(this.img.width / TILE_WIDTH);
    const tileRowCount = Math.floor(this.img.height / TILE_HEIGHT);
    let grid = new Grid(tileRowCount, tileRowSize, drawCtx);
    grid.process();
  }
}

export default CanvasImage;
