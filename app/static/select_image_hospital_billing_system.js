let arSliderBilling = document.getElementById("arSlider");
let prSliderBilling = document.getElementById("prSlider");
let processImageBilling = document.getElementById("processImage");
let arTextBilling = document.getElementById("arText");
let prTextBilling = document.getElementById("prText");

let imageCacheBilling = {};

function preloadImages() {
  for (let step = arSliderBilling.min; step <= arSliderBilling.max; step++) {
    for (
      let difficulty = prSliderBilling.min;
      difficulty <= prSliderBilling.max;
      difficulty++
    ) {
      let src = `/static/images/models/Dataset-1_AR-${step}/Dataset-1_AR-${step}0_PR-${difficulty}0.dot.png`;
      if (!imageCacheBilling[src]) {
        let img = new Image();
        img.src = src;
        imageCacheBilling[src] = img;
      }
    }
  }
}

function updateImage() {
  let step = arSliderBilling.value;
  let difficulty = prSliderBilling.value;
  let src = `/static/images/models/Dataset-1_AR-${step}/Dataset-1_AR-${step}0_PR-${difficulty}0.dot.png`;

  if (imageCacheBilling[src]) {
    processImageBilling.src = src;
  } else {
    let img = new Image();
    img.onload = () => {
      processImageBilling.src = src;
    };
    img.src = src;
    imageCacheBilling[src] = img;
  }

  arTextBilling.textContent = step;
  prTextBilling.textContent = difficulty;
}

arSliderBilling.addEventListener("input", updateImage);
prSliderBilling.addEventListener("input", updateImage);

// Preload images and then update the initial image
preloadImages();
updateImage();
