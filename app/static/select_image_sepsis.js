let stepSliderSepsis = document.getElementById("stepSlider");
let difficultySliderSepsis = document.getElementById("complexitySlider");
let processImageSepsis = document.getElementById("processImage");
let stepNameSepsis = document.getElementById("stepName");
let complexityLevelSepsis = document.getElementById("complexityLevel");

function updateImage() {
  let step = stepSliderSepsis.value;
  let difficulty = difficultySliderSepsis.value;
  processImageSepsis.src = `/static/images/models/model-${step}-${difficulty}.png`;
  stepNameSepsis.textContent = step;
  complexityLevelSepsis.textContent = difficulty;
}

stepSliderSepsis.addEventListener("input", updateImage);
difficultySliderSepsis.addEventListener("input", updateImage);

// Initial image update
updateImage();
