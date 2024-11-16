var slider = document.getElementById("slider");
var handle = document.getElementById("handle");
var gridSize = 10;
var step = slider.clientWidth / gridSize;
var coordinates = [];
var lastX = -1;
var lastY = -1;
var processImageIntOp = document.getElementById("processImage");
var arTextIntOp = document.getElementById("arText");
var prTextIntOp = document.getElementById("prText");
var imageCacheIntOp = {};
function preloadImages() {
  for (var step = 1; step <= gridSize; step++) {
    for (var difficulty = 1; difficulty <= gridSize; difficulty++) {
      var src = `/static/images/models/Dataset_7/Dataset-7_AR-${step}0_PR-(0-100)/Dataset-7_AR-${step}0_PR-${difficulty}0.dot.png`;
      if (!imageCacheIntOp[src]) {
        var img = new Image();
        img.src = src;
        imageCacheIntOp[src] = img;
      }
    }
  }
}
function updateImage(x, y) {
  var src = `/static/images/models/Dataset_7/Dataset-7_AR-${x}0_PR-(0-100)/Dataset-7_AR-${x}0_PR-${y}0.dot.png`;
  if (imageCacheIntOp[src]) {
    processImageIntOp.src = src;
  } else {
    var img = new Image();
    img.onload = () => {
      processImageIntOp.src = src;
    };
    img.src = src;
    imageCacheIntOp[src] = img;
  }
  arTextIntOp.textContent = x;
  prTextIntOp.textContent = y;
}
handle.addEventListener("mousedown", function (event) {
  event.preventDefault();
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});
function onMouseMove(event) {
  var rect = slider.getBoundingClientRect();
  var x = Math.floor((event.clientX - rect.left) / step) + 1;
  var y = Math.floor((rect.bottom - event.clientY) / step) + 1;
  x = Math.max(1, Math.min(gridSize, x));
  y = Math.max(1, Math.min(gridSize, y));
  if (x !== lastX || y !== lastY) {
    handle.style.left = (x - 1) * step + "px";
    handle.style.bottom = (y - 1) * step + "px";

    var currentTime = new Date().toISOString();
    coordinates.push({ x, y, time: currentTime });
    console.log(coordinates);
    updateImage(x, y);

    // Обновляем значение в input
    coordinatesInput.value = JSON.stringify(coordinates);

    lastX = x;
    lastY = y;
  }
}
function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

// Preload images and then update the initial image
preloadImages();
updateImage(1, 1);

// Устанавливаем начальное значение для input
coordinatesInput.value = JSON.stringify(coordinates);
