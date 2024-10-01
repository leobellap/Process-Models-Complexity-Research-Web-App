let arSliderSepsis = document.getElementById("arSlider");
let prSliderSepsis = document.getElementById("prSlider");
let processImageSepsis = document.getElementById("processImage");
let arTextSepsis = document.getElementById("arText");
let prTextSepsis = document.getElementById("prText");

let imageCacheSepsis = {};

function preloadImages() {
  for (let step = arSliderSepsis.min; step <= arSliderSepsis.max; step++) {
    for (
      let difficulty = prSliderSepsis.min;
      difficulty <= prSliderSepsis.max;
      difficulty++
    ) {
      let src = `/static/images/models/Dataset_7/Dataset-7_AR-${step}0_PR-(0-100)/Dataset-7_AR-${step}0_PR-${difficulty}0.dot.png`;
      if (!imageCacheSepsis[src]) {
        let img = new Image();
        img.src = src;
        imageCacheSepsis[src] = img;
      }
    }
  }
}

function updateImage() {
  let step = arSliderSepsis.value;
  let difficulty = prSliderSepsis.value;
  let src = `/static/images/models/Dataset_7/Dataset-7_AR-${step}0_PR-(0-100)/Dataset-7_AR-${step}0_PR-${difficulty}0.dot.png`;

  if (imageCacheSepsis[src]) {
    processImageSepsis.src = src;
  } else {
    let img = new Image();
    img.onload = () => {
      processImageSepsis.src = src;
    };
    img.src = src;
    imageCacheSepsis[src] = img;
  }

  arTextSepsis.textContent = step;
  prTextSepsis.textContent = difficulty;
}

arSliderSepsis.addEventListener("input", updateImage);
prSliderSepsis.addEventListener("input", updateImage);

// Preload images and then update the initial image
preloadImages();
updateImage();
