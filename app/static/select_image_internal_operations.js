let stepSliderOperations = document.getElementById("stepSlider");
let difficultySliderOperations = document.getElementById("complexitySlider");
let processImageOperations = document.getElementById("processImage");
let stepNameOperations = document.getElementById("stepName");
let complexityLevelOperations = document.getElementById("complexityLevel");

function updateImage() {
  const step = stepSliderOperations.value;
  const difficulty = difficultySliderOperations.value;
  processImageOperations.src = `/static/images/models/model-${step}-${difficulty}.png`;
  stepNameOperations.textContent = step;
  complexityLevelOperations.textContent = difficulty;
}

stepSliderOperations.addEventListener("input", updateImage);
difficultySliderOperations.addEventListener("input", updateImage);

// Initial image update
updateImage();
