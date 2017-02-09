import CanvasImage from './CanvasImage.js';

// Load the image into a canvas element
function loadImageCanvas() {
  let canvasImage = new CanvasImage('image-preview');
  let input;

  input = document.getElementById('file-select');
  if (!input.files[0]) {
    alert("Please select a file to load.");
  } else {
    let imageFile = input.files[0];
    canvasImage.readImage(imageFile);
  }
}

document.getElementById('btn-load-image').onclick = loadImageCanvas;
