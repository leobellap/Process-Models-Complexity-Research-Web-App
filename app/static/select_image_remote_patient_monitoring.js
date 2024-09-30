let stepSliderMonitoring = document.getElementById("stepSlider");
let difficultySliderMonitoring = document.getElementById("complexitySlider");
let processImageMonitoring = document.getElementById("processImage");
let stepNameMonitoring = document.getElementById("stepName");
let complexityLevelMonitoring = document.getElementById("complexityLevel");

function updateImage() {
  const step = stepSliderMonitoring.value;
  const difficulty = difficultySliderMonitoring.value;
  processImageMonitoring.src = `/static/images/models/model-${step}-${difficulty}.png`;
  stepNameMonitoring.textContent = step;
  complexityLevelMonitoring.textContent = difficulty;
}

stepSliderMonitoring.addEventListener("input", updateImage);
difficultySliderMonitoring.addEventListener("input", updateImage);

// Initial image update
updateImage();
