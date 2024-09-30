let stepSliderBilling = document.getElementById("stepSlider");
let difficultySliderBilling = document.getElementById("complexitySlider");
let processImageBilling = document.getElementById("processImage");
let stepNameBilling = document.getElementById("stepName");
let complexityLevelBilling = document.getElementById("complexityLevel");

function updateImage() {
  const step = stepSliderBilling.value;
  const difficulty = difficultySliderBilling.value;
  processImageBilling.src = `/static/images/model-${step}-${difficulty}.png`;
  stepNameBilling.textContent = step;
  complexityLevelBilling.textContent = difficulty;
}

stepSliderBilling.addEventListener("input", updateImage);
difficultySliderBilling.addEventListener("input", updateImage);

// Initial image update
updateImage();
