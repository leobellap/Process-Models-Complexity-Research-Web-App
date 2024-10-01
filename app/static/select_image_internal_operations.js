let arSliderIntOp = document.getElementById("arSlider");
let prSliderIntOp = document.getElementById("prSlider");
let processImageIntOp = document.getElementById("processImage");
let arTextIntOp = document.getElementById("arText");
let prTextIntOp = document.getElementById("prText");

let imageCacheIntOp = {};

function preloadImages() {
  for (let step = arSliderIntOp.min; step <= arSliderIntOp.max; step++) {
    for (
      let difficulty = prSliderIntOp.min;
      difficulty <= prSliderIntOp.max;
      difficulty++
    ) {
      let src = `/static/images/models/Dataset-1_AR-${step}/Dataset-1_AR-${step}0_PR-${difficulty}0.dot.png`;
      if (!imageCacheIntOp[src]) {
        let img = new Image();
        img.src = src;
        imageCacheIntOp[src] = img;
      }
    }
  }
}

function updateImage() {
  let step = arSliderIntOp.value;
  let difficulty = prSliderIntOp.value;
  let src = `/static/images/models/Dataset-1_AR-${step}/Dataset-1_AR-${step}0_PR-${difficulty}0.dot.png`;

  if (imageCacheIntOp[src]) {
    processImageIntOp.src = src;
  } else {
    let img = new Image();
    img.onload = () => {
      processImageIntOp.src = src;
    };
    img.src = src;
    imageCacheIntOp[src] = img;
  }

  arTextIntOp.textContent = step;
  prTextIntOp.textContent = difficulty;
}

arSliderIntOp.addEventListener("input", updateImage);
prSliderIntOp.addEventListener("input", updateImage);

// Preload images and then update the initial image
preloadImages();
updateImage();
