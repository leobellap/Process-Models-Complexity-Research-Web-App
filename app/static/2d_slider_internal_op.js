var slider = document.getElementById("slider");
var handle = document.getElementById("handle");
var gridSize = 11;
var step = slider.clientWidth / gridSize;
var coordinates = [];
var lastX = -1;
var lastY = -1;
var processImageIntOp = document.getElementById("processImage");
var arTextIntOp = document.getElementById("arText");
var prTextIntOp = document.getElementById("prText");
var imageCacheIntOp = {};

function preloadImages() {
  for (var step = 0; step < gridSize; step += 1) {
    for (var difficulty = 0; difficulty < gridSize; difficulty += 1) {
      var src = `/static/images/models/Dataset_5/Dataset-5_AR-${step}0_PR/Dataset-5_AR-${step}0_PR-${difficulty}0.svg`;
      if (!imageCacheIntOp[src]) {
        var img = new Image();
        img.src = src;
        imageCacheIntOp[src] = img;
      }
    }
  }
}

function updateImage(x, y) {
  var src = `/static/images/models/Dataset_5/Dataset-5_AR-${x}0_PR/Dataset-5_AR-${x}0_PR-${y}0.svg`;
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
  var x = Math.floor((event.clientX - rect.left) / step);
  var y = Math.floor((rect.bottom - event.clientY) / step);

  x = Math.max(0, Math.min(gridSize - 1, x));
  y = Math.max(0, Math.min(gridSize - 1, y));

  if (x !== lastX || y !== lastY) {
    handle.style.left = x * step + "px";
    handle.style.bottom = y * step + "px";

    var currentTime = new Date().toISOString();

    coordinates.push({ x, y, time: currentTime });
    // console.log(coordinates);

    updateImage(x, y);

    // Устанавливаем значение для input
    coordinatesInput.value = JSON.stringify(coordinates);
    event_rate.value = x;
    path_rate.value = y;

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

// Set initial position of the handle and update the initial image
var initialX = Math.floor(gridSize / 2);
var initialY = Math.floor(gridSize / 2);
// handle.style.left = initialX * step + "px";
// handle.style.bottom = initialY * step + "px";
updateImage(initialX, initialY);
