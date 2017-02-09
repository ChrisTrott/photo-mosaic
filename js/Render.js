class Render {
  static clearMosaic() {
    const mosaicArea = document.getElementById('mosaic-area');
    while (mosaicArea.hasChildNodes()) {
      mosaicArea.removeChild(mosaicArea.firstChild);
    }
  }

  static setupMosaic(rows, cols) {
    for (var row = 0; row < rows; row++) {
      let mosaicArea = document.getElementById('mosaic-area');
      mosaicArea.insertAdjacentHTML('beforeend',
        `<div class="mosaic-row" id="mosaic-row-${row}"></div>`);
      let mosaicRow = document.getElementById(`mosaic-row-${row}`);
      for (var col = 0; col < cols; col++) {
        mosaicRow.insertAdjacentHTML('beforeend',
          `<span class="mosaic-tile" id="mosaic-tile-${row}-${col}"></span>`);
      }
    }
  }

  static renderTile(row, col, data) {
    let mosaicTile = document.getElementById(`mosaic-tile-${row}-${col}`);
    mosaicTile.insertAdjacentHTML('beforeend', data);
  }
}

export default Render;
