let arSliderRemote = document.getElementById("arSlider");
let prSliderRemote = document.getElementById("prSlider");
let processImageRemote = document.getElementById("processImage");
let arTextRemote = document.getElementById("arText");
let prTextRemote = document.getElementById("prText");

let imageCacheRemote = {};

function preloadImages() {
  for (let step = arSliderRemote.min; step <= arSliderRemote.max; step++) {
    for (
      let difficulty = prSliderRemote.min;
      difficulty <= prSliderRemote.max;
      difficulty++
    ) {
      let src = `/static/images/models/Dataset_5/Dataset-5_AR-${step}0_PR-(0-100)/Dataset-5_AR-${step}0_PR-${difficulty}0.dot.png`;
      if (!imageCacheRemote[src]) {
        let img = new Image();
        img.src = src;
        imageCacheRemote[src] = img;
      }
    }
  }
}

function updateImage() {
  let step = arSliderRemote.value;
  let difficulty = prSliderRemote.value;
  let src = `/static/images/models/Dataset_5/Dataset-5_AR-${step}0_PR-(0-100)/Dataset-5_AR-${step}0_PR-${difficulty}0.dot.png`;

  if (imageCacheRemote[src]) {
    processImageRemote.src = src;
  } else {
    let img = new Image();
    img.onload = () => {
      processImageRemote.src = src;
    };
    img.src = src;
    imageCacheRemote[src] = img;
  }

  arTextRemote.textContent = step;
  prTextRemote.textContent = difficulty;
}

arSliderRemote.addEventListener("input", updateImage);
prSliderRemote.addEventListener("input", updateImage);

// Preload images and then update the initial image
preloadImages();
updateImage();
